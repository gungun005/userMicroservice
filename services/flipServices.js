
const flipRepository=require('../repository/flipRepository');

const getFlipUsers = (body) => {
  let getFlipUsers = flipRepository.getFlipUsers(body);
  return( getFlipUsers);
};
const postFlipUsers = (body) => {
    let postFlipUsers=flipRepository.postFlipUsers(body);
    return( postFlipUsers);
  };

const getFlipUsersRegister=(body)=>
{
 let getFlipUsersRegister=flipRepository.getFlipUsersRegister(body);
 return( getFlipUsersRegister);
};
const postFlipUsersRegister=(body)=>
{
    let  postFlipUsersRegister=flipRepository.postFlipUsersRegister(body);
    return(postFlipUsersRegister);

};

const getFlipUsersDelete=(body)=>
{
  let getFlipUsersDelete=flipRepository.getFlipUsersDelete(body);
  return(getFlipUsersDelete);
};

const postFlipUsersDelete=(body)=>
{
   let postFlipUsersDelete=flipRepository.postFlipUsersDelete(body);
   return(postFlipUsersDelete);
};
const getFlipUsersUpdate=(body)=>
{
   let getFlipUsersUpdate=flipRepository.getFlipUsersUpdate(body);
   return(getFlipUsersUpdate);
};
const postFlipUsersUpdate=(body)=>
{
  let postFlipUsersUpdate=flipRepositoryS.postFlipUsersUpdate(body);
  return(postFlipUsersUpdate);
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