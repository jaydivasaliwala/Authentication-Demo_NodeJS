const sha256 = require('sha256')
const fs = require('fs')
const DataGet = () => {
    return result =  JSON.parse(fs.readFileSync("Static/data.json")).data.map(m => ({user_name:m.user_name,name:m.name,age:m.age}))
}

const UserReg = (req_data) => {
    let data = JSON.parse(fs.readFileSync("Static/data.json"));
    let flag = data.data.filter(f => f.user_name === req_data.user_name).map(m => m.user_name)
    if(flag.length !== 0)
    {
        return false;
    }
    const pass = sha256(req_data.password);
    req_data.password = pass;
    const id_list = data.data.map(d => d.id)
    const id = id_list.length === 0 ? 1 : Math.max(...id_list)+1
    req_data.id = id
    data.data.push(req_data);
    fs.writeFileSync("Static/data.json",JSON.stringify(data))
    return true;
}

module.exports = {DataGet, UserReg}