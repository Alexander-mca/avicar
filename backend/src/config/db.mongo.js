const { MongoClient} = require('mongodb');
require('dotenv').config();

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_DATABASE,
    MONGO_PORT,
} = process.env;


//const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}`;
const uri = `mongodb://root:M1A2024.@localhost:27017`;

const insertData = async(collec, data) => {
    console.log('URI: ', uri)
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect().then(() => console.log('Conectado a la base de datos'));
        const dbmongo = mongoClient.db(MONGO_DATABASE);
        const coleccion = dbmongo.collection(collec);
        const result = await coleccion.insertOne(data);
        return result;
    } catch (error) {
        console.error('Error insertData: ', error);
        return error;
    } finally {
        await mongoClient.close();
        console.log('Desconectado de la base de datos')
    }
};
const getData = async(collec, data)=>{
    console.log("URL", uri);
    const mongoClient = new MongoClient(uri);
    try{
        await mongoClient.connect().then(() => console.log('Conectado a la base de datos'));
        const dbmongo = mongoClient.db(MONGO_DATABASE);
        const coleccion = dbmongo.collection(collec);
        const result = await coleccion.findOne({usuario: data.email});
        const encontrado = false;
        if(result){
            //si es el usuario indicado
            encontrado = true;
        }else{
            result = await coleccion.findOne({correo: data.email});
            if(result){
                encontrado = true;
            }
        }

        if(encontrado){
            //se procede a validar datos
            return result;
        }
    }catch(error){

    }
}
module.exports = {
    insertData,
    getData
};