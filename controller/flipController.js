const flipServices=require('../services/flipServices');

const getFlipUsers = (req, res) => {
  let getFlipUsers=flipServices.getFlipUsers(req.body);
  res.send( getFlipUsers);
};
const postFlipUsers = (req, res) => {
    let postFlipUsers=flipServices.postFlipUsers(req.body);
    res.send( postFlipUsers);
  };

const getFlipUsersRegister=(req,res)=>
{
 let getFlipUsersRegister=flipServices.getFlipUsersRegister(req.body);
 res.send( getFlipUsersRegister);
};
const postFlipUsersRegister=(req,res)=>
{
    let  postFlipUsersRegister=flipServices.postFlipUsersRegister(req.body);
    res.send(postFlipUsersRegister);

};

const getFlipUsersDelete=(req,res)=>
{
  let getFlipUsersDelete=flipServices.getFlipUsersDelete(req.body);
  res.send(getFlipUsersDelete);
};

const postFlipUsersDelete=(req,res)=>
{
   let postFlipUsersDelete=flipServices.postFlipUsersDelete(req.body);
   res.send(postFlipUsersDelete);
};
const getFlipUsersUpdate=(req,res)=>
{
   let getFlipUsersUpdate=flipServices.getFlipUsersUpdate(req.body);
   res.send(getFlipUsersUpdate);
};
const postFlipUsersUpdate=(req,res)=>
{
  let postFlipUsersUpdate=flipServices.postFlipUsersUpdate(req.body);
  res.send(postFlipUsersUpdate);
};


module.exports={
getFlipUsers,
postFlipUsers,
getFlipUsersRegister,
postFlipUsersRegister,
getFlipUsersDelete,
postFlipUsersDelete,
getFlipUsersUpdate,
postFlipUsersUpdate
};