exports.success = (req,res,message,status)=>{
    res.status(status || 200)
    res.send({error:'',body:message})
}
//Cuidadito con lo que le devuelves al usuario
exports.error =(req,res,message,status,details)=>{
    let time = new Date();
    let actualTime = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
    console.error('[response error]',actualTime,details);
    res.status(status || 500)
    res.send({error : message,body:''})
}