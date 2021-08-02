// Logica de almacenamiento
const db = require('mongoose');
const Model = require('./model');

/// mongodb+srv://db_user_david:pTquoQpSGRYgDAfi@cluster0.7n0jj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect('mongodb://db_user_david:pTquoQpSGRYgDAfi@cluster0-shard-00-00.7n0jj.mongodb.net:27017,cluster0-shard-00-01.7n0jj.mongodb.net:27017,cluster0-shard-00-02.7n0jj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-yxaurf-shard-0&authSource=admin&retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{console.log('[db] Conectada con éxito')})
.catch(e =>{console.error('[Error db]', e)})


const addMessage = (message) => {
    //list.push(message);
    console.log('Guardando...')
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = async ()=>{
    const messages = await Model.find();
    return messages;
}

const updateMessage = async (id, message) => {
    const foundMessage = await Model.findById(id);
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;

    
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update:updateMessage,
    // update
    // delete
};