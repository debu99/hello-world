let express = require('express');
let app = express();

app.get('/', function (req, res) {
  let obj = {
    endpoints: [
      "/hello",
      "/ping",
      "/current-date",
      "/fibo/:n",
    ]
  };
  res.send(obj);
});

app.get('/ping', function (req, res) {
  res.send("pong");
});

app.get('/hello', function (req, res) {
  console.log(req.headers);
  res.end('<html><body><h1>Hello, World!</h1></body></html>');
});

app.get('/current-date', function (req, res) {
  let obj = {
    name: "current",
    value: new Date()
  };
  res.send(obj);
});

app.get('/fibo/:n', function (req, res) {
  let obj = {
    name: "fibo",
    value: fibo(req.params.n)
  };
  res.send(obj);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function fibo(n) { // 1
  if (n < 2)
    return 1;
  else   return fibo(n - 3) + fibo(n - 1);
}
