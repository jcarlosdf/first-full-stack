const UsersService = require('../services/users.service')
const { getPagination, getPagingData } = require('../utils/sequelize-utils')

const usersService = new UsersService()

const getUsers = async (request, response, next) => {
  try {
    let query = request.query
    let { page, size } = query

    const { limit, offset } = getPagination(page, size, '10')
    query.limit = limit
    query.offset = offset

    let users = await usersService.findAndCount(query)
    const results = getPagingData(users, page, limit)
    return response.status(200).json({ results: results })

  } catch (error) {
    next(error)
  }
}

const addUser = async (request, response, next) => {
  try {
    let body = request.body
    let newUser = await usersService.createUser(body)
    return response.status(201).json({ results: newUser })
  } catch (error) {
    next(error)
  }
}

const getUser = async (request, response, next) => {
  try {
    let id = request.params.id
    let user = await usersService.getUserOr404(id)
    return response.status(200).json({ results: user })
  } catch (error) {
    next(error)
  }
}

const updateUser = async (request, response, next) => {
  try {
    let id = request.params.id
    let body = request.body
    let updatedUser = await usersService.updateUser(id, body)
    return response.status(200).json({ results: updatedUser })
  } catch (error) {
    next(error)
  }
}

const removeUser = async (request, response, next) => {
  try {
    let id = request.params.id
    let user = await usersService.destroyUser(id)
    return response.json({ results: user, message: 'removed' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUsers,
  addUser,
  getUser,
  updateUser,
  removeUser
}