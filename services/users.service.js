const { Op } = require('sequelize')
// const uuid = require('uuid').v4()
const models = require('../database/models/index').sequelize
const CustomError = require('../utils/custom-error')


class UsersService {

  constructor() {

  }

  async findAndCount(query) {
    const options = {
      where: {},
    }

    const { limit, offset } = query
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }

    const { name } = query
    if (name) {
      options.where.name = { [Op.iLike]: `%${name}%` }
    }

    //Necesario para el findAndCountAll de Sequelize
    options.distinct = true

    const users = await models.Users.findAndCountAll(options)
    return users
  }

  async createUser(body) {
    const transaction = await models.sequelize.transaction()
    try {
      let newUser = await models.Users.create({
        // id: uuid(),
        first_name: body.first_name,
        last_name: body.last_name,
        username: body.username,
        email: body.email,
        password: body.password,
        // password: hashPassword(body.password),
        email_verified: body.email_verified,
        token: body.token,
      }, { transaction })

      await transaction.commit()
      return newUser
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }

  async getUserOr404(id) {
    //Return Instance if we do not converted to json (or raw:true)
    let user = await models.Users.findByPk(id)

    if (!user) throw new CustomError('Not found User', 404, 'Not Found')

    return user
  }

  async getUser(id) {
    //Return not an Instance raw:true | we also can converted to Json instead
    let user = await models.Users.findByPk(id, { raw: true })
    return user
  }

  async updateUser(id, body) {
    const transaction = await models.sequelize.transaction()
    try {
    // ! user es una promesa que hay que resolver, con trycatch? y repetir todo?
      const user = this.getUserOr404(id)

      let updatedUser = await user.update(body, { transaction })

      await transaction.commit()

      return updatedUser
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }

  async destroyUser(id) {
    const transaction = await models.sequelize.transaction()
    try {
      // ! Aquí podríamos hacer lo mismo del update, o es necesario hacerlo así para no tener que resolver esa promesa?
      let user = await models.Users.findByPk(id)

      if (!user) throw new CustomError('Not found user', 404, 'Not Found')

      await user.destroy({ transaction })

      await transaction.commit()

      return user
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }

}

module.exports = UsersService