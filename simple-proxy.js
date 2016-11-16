const express = require('express');  
const request = require('request');
const app = express();  

app.get('/', (req, res) => {
  console.log("proxying to " + req.query.url);
  request(req.query.url, (error, response, body) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
    if (!error && response.statusCode == 200) 
      res.status(200).send(body);
    else
      res.status(404).send(error || 'error');
  });
});

const port = process.env.PORT || 4567
app.listen(port, () => console.log("simple-proxy listening on port " + port + "..."));