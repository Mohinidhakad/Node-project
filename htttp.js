const http =require ('http')
const server =http.createServer((request,response)=>
    {
        const url =request.url;
        response.writeHead(200, { 'Content-Type': 'text/html' });// to recognize the text is html
        const writeLinks = () => {
          response.write("<hr>");
          response.write("<a href='/'>Home</a>&nbsp;");
          response.write("<a href='/about'>about</a>&nbsp;");
          response.write("<a href='/contact'>contact</a>&nbsp;");
          response.write("<a href='/cart'>cart</a>&nbsp;");
      };
        switch(url)
        {
          case"/":
            response.write("<h1>hello</h1>");
            writeLinks();

            break
          case "/about":
            response.write("welcome");
            writeLinks();
           
           
            break
          case "/contact":
            response.write("come again");
            writeLinks();
            

            break
           case "/cart":
            response.write("add");
            writeLinks();
            
            
            break
        }
        response.end();
    })// server object with listning fun
    
    //start server
    //server.listen(9898)
    server.listen(9898, () => {
      console.log('Server is listening on port 9898');
  });
           
          
