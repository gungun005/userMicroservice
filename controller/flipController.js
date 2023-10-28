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

const updateFlipUsersUpdate=(req,res)=>
{
   let updateFlipUsersUpdate=flipServices.updateFlipUsersUpdate(req.body);
   res.send(updateFlipUsersUpdate);
};



module.exports={
getFlipUsers,
postFlipUsers,
getFlipUsersRegister,
postFlipUsersRegister,
getFlipUsersDelete,
updateFlipUsersUpdate
};