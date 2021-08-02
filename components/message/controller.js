const store = require('./store')

const addMessage = (user, message)=>{
   return new Promise((resolve, reject)=>{
    if(!user || !message){
        console.error('[MessageController] No hay un usuario o mensaje')
        return reject('Los datos son invalidos');        
    }
    let fullMessage = {
        user: user,
        message: message,
        date: new Date(),
    }
    store.add(fullMessage);
    //console.log(store.list())
    resolve(fullMessage);
   })    
}

const getMessages = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(store.list())
    });
}

const updateMessage = (id,message) => {
    return new Promise(async (resolve,reject)=> {
        if(!id || !message){
            return reject('Invalid data');
        }
        try{
            const result = await store.update(id,message);
            resolve(result);
        }catch(e){
            reject('Mensaje no encontrado');
        }
        
        
        
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
};