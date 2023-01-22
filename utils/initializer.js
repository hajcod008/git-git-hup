const mongodb = require('mongodb');
//const bodyParser = require('bady-parser');
class Config{
    static async initmongo() {
const mongoUsername = process.env.ABOLFAZL_MONGO_USERNAME
const mongoPassword = process.env.ABOLFAZL_MONGO_PASSWORD
Config.mongoConfig = {  
    server: process.env.ABOLFAZL_MONGO_SERVER,
    port: process.env.ABOLFAZL_MONGO_PORT,
};
Config.databaseName = process.env.ABOLFAZL_MONGO_DATABASE;
const mongoUrl = `mongodb://${mongoUsername}:${mongoPassword}@${Config.mongoConfig.server}:${Config.mongoConfig.port}`

Config.mongoDBconnection = await mongodb.MongoClient.connect(
    mongoUrl,
//{userNewUrlParser:true}
);
Config.mongodb = Config.mongoDBconnection.db(Config.databaseName);
    }
    static async Initialize() {
        await Config.initmongo();
    }
}

module.exports = Config;