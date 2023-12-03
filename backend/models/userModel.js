const users = require("../data/dummyUserData");

let nextUserId = users.length + 1;

const addUser = (newUser) => {
  console.log(newUser);
  const existingUser = users.find((user) => user.username === newUser.username);
  if (existingUser) {
    throw new Error("Username already exists");
  }
  newUser.id = nextUserId++;
  users.push(newUser);
};

const findUser = (username) => users.find((user) => user.username === username);

const findUserById = (id) => users.find((user) => user.id === id);

module.exports = { addUser, findUser, findUserById };
