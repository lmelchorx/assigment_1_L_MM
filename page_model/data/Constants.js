import dotenv from 'dotenv'
dotenv.config()


export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME:'invalid_user',
        PASSWORD:'invalid_password'
    }
}

export const USERINFO = {
    FNAME: process.env.FIRSTNAME,
    LNAME: process.env.LASTNAME,
    ZIP: process.env.ZIPCODE
}