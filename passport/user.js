var passUtil = require('./password');

var Users = {
  andy: {
       salt: 'G81lJERghovMoUX5+RoasvwT7evsK1QTL33jc5pjG0w=',
           password: 'DAq+sDiEbIR0fHnbzgKQCOJ9siV5CL6FmXKAI6mX7UY=',
           work: 5000,
           displayName: 'Andy',
           id: 'andy',
           provider: 'local',
           username: 'andy'
     }
};

 var findByUsername = function findByUsername(username, cb){
     cb(null, Users[username]);
};
   var addUser = function addUser(username, password, work, cb){
     if(Users[username] === undefined)
     {
       passUtil.passwordCreate(password, function(err, salt, password){
         Users[username] = {
           salt: salt,
           password: password,
           work: work,
           displayName: username,
           id: username,
           provider: 'local',
           username: username
};
         return cb(null, Users[username]);
       });
     }else{
       return cb({errorCode: 1, message: 'User exists!'}, 'User exists!', null); 
     }
};

var updatePassword = function(username, password, work){
     passUtil.passwordCreate(password, function(err, salt, password){
       Users[username].salt = salt;
       Users[username].password = password;
       Users[username].work = work;
     }); 
};

exports.findByUsername = findByUsername;
exports.addUser = addUser;
exports.updatePassword = updatePassword;