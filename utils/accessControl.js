const jwt = require('jsonwebtoken');
const userRepository = require('../services/repository/repository');

const config = require('./../utils/initializer');
const {promisify} = require('util');
 

async function checkAccess(req, res) {
    if(!req.headers.authorization) {
        throw{ status:400,
        error:{message:'توکن ارسال نشده اسو'},
    }
}
const authorization = req.headers.authorization.split('bearer');
if(authorization.length < 2) {
    throw{
        status:400,
        error:{message:'invalid token!'},
    };
}
const token = authorization[1];
if(!token) throw {status:400, error:{message:'token not provided'} }
let decodedtoken;
try {
    decodedtoken = jwt.verify(token, process.env.JWT_SECRET);

} catch (e) {
    throw { status:401,
    error:{
        message:'token has been expired or invalid token,pleas login again',

    },
};

}
if(decodedtoken.id === undefined) {
    throw { status:400, error:{message:'token not provided'}};

}


}


module.exports = {checkAccess}