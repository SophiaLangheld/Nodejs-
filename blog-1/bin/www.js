const http = require('http')

const PORT = 8000
//const ip = "127.0.0.1";

const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)




/*const http = require('http')
const server = http.createServer((request, response) => {
    response.end("Hello From NodeJS Server");
})

const port = 8000


server.listen(port, ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
});*/

