const homeApi = (req, res) => {
  res.send('This is Home.');
};

const signUpApi = (req, res) => {
  const { fname, lname } = req.body;
  console.log('this is unique id', req.uniqueId);
  res.send(`this is signUp, My name is ${fname} and my last name is ${lname}`);
};

const logInApi = (req, res) => {
  res.send('This is Login.');
};

module.exports = {
  homeApi,
  signUpApi,
  logInApi,
};
