const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  // validate the userId and password with the database
  // if the userId and password are correct, return a success response
  // otherwise, return an error response
});

app.post('/register', (req, res) => {
  const userId = req.body.userId;
  const email = req.body.email;
  const password = req.body.password;
  // insert the new user's data into the database
  // if the insertion is successful, return a success response
  // otherwise, return an error response
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
