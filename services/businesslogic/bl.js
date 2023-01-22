
const repository = require('../repository/repository');
const generate = require('../../utils/generate');

async function register(inputData) {
     const user = await repository.findUser({email: inputdata.email});
      if (user) {
       throw{
           status: 409,
           data:{
           message:' این کابر در بایگاه داده موجود است لطفا لاگین کنید'
        }
    }    
 }
await repository.register(inputData);
return{
    message: 'اطلاعات با موفقیت ثبت شد',
    result:inputData
    
}
}
const login = async (inputData) => {
    try {
        const userData = await repository.findUser({ email: inputData.email});
        if(!userData) {
            throw{
                message:'کاربر مورد نظر نبود داش',
                status:404
            }
        }
if(ispasswordcorrect) {
    const accessToken = generate.access(userData.id)
    return{ 
        status:200,
        data: {
            message:'welcome',
            result: {
                accessToken,
                userData
            }
        }
    }
}else{
    throw{
        message:'password or email is wrong'
    }
}
    } catch (err) {
        let statusCode = err.status || 400;
        throw{
            status: statusCode,
            data: {
                message: err.message
            }
        }
        
    }
}

module.exports = { register, login};