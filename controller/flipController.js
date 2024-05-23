const flipServices = require("../services/flipServices");

const getFlipUsers = async (req, res) => {
  let getFlipUsers = await flipServices.getFlipUsers(req.body);
  res.send(getFlipUsers);
};
const postFlipUsers = async (req, res) => {
  let postFlipUsers = await flipServices.postFlipUsers(req.body);
  res.send(postFlipUsers);
};

const getFlipUsersRegister = async (req, res) => {
  let getFlipUsersRegister = await flipServices.getFlipUsersRegister(req.body);
  res.send(getFlipUsersRegister);
};
const postFlipUsersRegister = async (req, res) => {
  let postFlipUsersRegister = await flipServices.postFlipUsersRegister(
    req.body
  );
  res.send(postFlipUsersRegister);
};

const getFlipUsersDelete = async (req, res) => {
  let getFlipUsersDelete = await flipServices.getFlipUsersDelete(req.body);
  res.send(getFlipUsersDelete);
};

const updateFlipUsersUpdate = async (req, res) => {
  let updateFlipUsersUpdate = await flipServices.updateFlipUsersUpdate(
    req.body
  );
  res.send(updateFlipUsersUpdate);
};

module.exports = {
  getFlipUsers,
  postFlipUsers,
  getFlipUsersRegister,
  postFlipUsersRegister,
  getFlipUsersDelete,
  updateFlipUsersUpdate,
};
