const http=require('http');

//Create a server object
http
.createServer((req,res) => {
    //write a response
    res.write('Hello World');
    res.end();

})
.listen(5000, () =>console.log('server Running'));
