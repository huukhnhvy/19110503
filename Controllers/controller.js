const Model = require('../Models/model');

exports.GetAll = (req, res) => {
    console.log('Method :'+req.method, ' Url :'+req.url)
    Model.All().then(result => {
        res.json(result);
    })
}
exports.GetOne = (req, res) => {
    let ID = req.params.id
    console.log('Method :'+req.method, ' Url :'+req.url)
    Model.One(ID).then(result => {
        if (result==-1) {
            res.json({error:'not valid'})
        }
        else{
            res.json(result)
        }
        
    })
}
exports.Create=(req, res) => {
    let ID = req.params.id
    let data=req.body
    console.log('Method :'+req.method, ' Url :'+req.url)
    Model.Create(data,ID).then(result=>{
        if (result==-1) {
            res.json({error:'Not valid'})
        }
        else{
            res.json({message:'Done'})
        }
    })
}
exports.GetAllMessage=(req, res) => {
    console.log('Method :'+req.method, ' Url :'+req.url)
    Model.AllMessage().then(result=>{
        res.send(result)
    })
}
exports.GetMessage=(req,res)=>{
    let ID = req.params.id
    console.log('Method :'+req.method, ' Url :'+req.url)
    Model.Message(ID).then(result=>{
        if(result==-1){
            res.json({error:'Not valid'})
        }
        else{
            res.send(result)
        }
    })
}
