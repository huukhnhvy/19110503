const myGroup = [
    { id: '19110503', name: 'Trần Hữu Khánh Vy' }
]

async function All() {
    return myGroup
}
async function One(id) {
    let data = myGroup.find(val => val.id == id)
    if (data) {
        return data
    }
    return -1
}
async function Create(req, id) {
    let data = myGroup.find(val => val.id== id)
    if (!data) {
        myGroup.push({ id: req.id, name: req.name })
        return 1
    }
    return -1
}
async function AllMessage() {
    let data=`<html><body><ul>${myGroup.map((val)=>{return `<li>${val.name}</li>`})}</ul></body></html>`
    console.log(data)
    return data
}
async function Message(id) {
    let data = myGroup.find(val => val.id == id)
    if (data) {
        return `<html><body><ul><li>${data.ten}</li></ul></body></html>`
    }
    return -1
}

module.exports={
    All,
    One,
    Create,
    AllMessage,
    Message
}
