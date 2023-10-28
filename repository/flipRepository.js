const getFlipUsers = (body) => {
    console.log(body);
    return("hey i m there working!");
 };
 
 const postFlipUsers = (body) => {
    return("hey i m there working!");
 };

 const getFlipUsersRegister=(body)=> {
    return("Hi ! Im registering the users");
 };

 const postFlipUsersRegister=(body)=>{
    return ("Hi I m doing ammendments in your registration");
 };
 
 const getFlipUsersDelete=(body)=>{
    return("Hi i m the deleted user");
 };
 const updateFlipUsersUpdate=(body)=>{
    return("hi if any updates i m their to tackle!");
 };

 
 module.exports={
 getFlipUsers,
 postFlipUsers,
 getFlipUsersRegister,
 postFlipUsersRegister,
 getFlipUsersDelete,
 updateFlipUsersUpdate
 };
