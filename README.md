# Backend SPRINT ACADEMLO

### for authenticate
Simply must sign in with your user credentials, email and password
Have to send credentials in the body request, Example:
    Default user, you can use this credentials to sign in temporally
    Method: POST 
    URL: localhost:3000/api/v1/login
    Body:
        {
            email: "admin@fullstack.com",
            password: "pass123"
        }
    
Note: you must copy/paste token to one of the token´s user property of records at ./services/users.services.js

Then, prove this route:
    Method: GET
    URL: localhost:3000/api/v1/user-info
    HEADER:
        Authorization: bearer copy_token_hear
    
    *the app show you a user data


* more info? let me a comment 