const fs = require('fs')
const DataGet = () => {
    return result =  JSON.parse(fs.readFileSync("Static/data.json"))
}

module.exports = {DataGet}