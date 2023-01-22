const config = require('../../utils/initializer');

async function register(inputData){
    await config.mongoDB.collection('register').insertOne(inputData)
};

  
async function findUser(query){
  try {
    const user = await config.mongoDB.collection('users').findOne(query,{projectin:{_id:0}});
    return user;
  } catch (err) {
    throw{
      status:400,
      message: err.message,
    }
  }
}
  module.exports = {register,findUser};