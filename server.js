const express = require('express');
const app = express();
const middleware = require('./middleware');
const api = require('./api');

app.use(express.json());

app.get('/', middleware.firstMiddlewar, api.homeApi);

app.post('/signup', middleware.secondMiddlewar, api.signUpApi);

app.get('/login', middleware.firstMiddlewar, api.logInApi);

module.exports = ({ port, cb }) => {
  app.listen(port, cb);
};

// app.listen(30001, () => {
//   console.log('server is running');
// });
