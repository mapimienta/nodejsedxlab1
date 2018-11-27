const archivo = 'customer-data.csv'
const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

csvtojson().fromFile(archivo).then((response)=>{
    console.log(response)
    const folderName = uuidv1()
    fs.mkdirSync(folderName)
    fs.writeFileSync(path.join(__dirname,folderName,'customer-data-json.txt'),JSON.stringify(response))    
    fs.writeFileSync(path.join(__dirname,folderName,'customer-data-json.json'),JSON.stringify(response))
})