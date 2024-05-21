const http =require('http')
const server =http.createServer((request,response)=>
    { 
        const url =request.url;
        switch(url)
        {
          case"/":
            response.write("hello")
            break
          case "/About":
            response.write("he")
            break
          case "/contact":
            response.write("h")
            break
           case "/cart":
            response.write("lo")
            break
        }
        response.end()
    })// server object with listning fun
    //start server
    server.listen(9898)
