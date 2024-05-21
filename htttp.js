const http =require('http')
const server =http.createServer((request,response)=>
    {

        response.write("hello")
        response.end()
    })// server object with listning fun
    //start server
    server.listen(9898)
