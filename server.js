const express = require('express')
const server = express()
server.use('/',express.static(__dirname+'/public/'))





server.listen(1221,()=>{
    console.log("server is listening at port http://localhost:1221/map.html")
})
