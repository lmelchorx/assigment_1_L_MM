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

export const PAGELABELS = {
    LOGINERROR: 'Epic sadface: Username and password do not match any user in this service',
    USERINFOERROR:'Error: First Name is required',
    CHECKOUTLABEL: 'Checkout: Overview',
    FINISHEDORDER: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
}