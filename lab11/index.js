const http = require('http')
const fs = require('fs')

const server = http.createServer()

// server.on('request', (req,res)=>{
//     fs.readFile('./cod3.jpg', (err,data)=>{
//         if(err) console.log("Error sth")
//         console.log("File is read")
//         res.end(data);
//     })    
// })


http.createServer((req,res)=>{
    fs.createReadStream("./cod3.jpg").pipe(res);
}).listen(3000, () => console.log("Running on localhost:3000"))
