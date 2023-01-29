const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(posts);
});

app.post('/', (req, res) => {
  posts.push(req.body);
  res.sendStatus(200);
})
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});