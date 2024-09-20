var http = require('http'); // http is an in built module of nodeSJ used for creaing server
var myClg = require('./cybrom');

http
  .createServer((req, res) => {
    // console.log(req);
    // console.log(req.url , req.method , req.headers);
    // res.writeHead(200, { 'Content-Type': {} }); -- headers are meta data added to request and responses
    res.write('Hello World');
    res.write(myClg.myCollage());
    res.write(myClg.myFee());

    res.end();
    // process.exit() --- hard exited our event loop
  })
  .listen(8000);
