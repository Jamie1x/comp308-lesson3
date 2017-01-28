//
//comments on toms version
//
let connect = require('connect');
//let http = require('http');
 
let app = connect();
const port = 3000;

app.listen(port);
console.log(`server listening at port: ${port}`);

//hello route
app.use('/hello', (req, res, next) => {
  res.setHeader('content-type', 'text/plain');
  res.end("hello");
  next();
});

//main route for root
app.use('/', (req, res, next) => {
  res.setHeader('content-type', 'text/plain');
  res.end("welcome");
  next();
});

