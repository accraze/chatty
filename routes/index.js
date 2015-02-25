// module.exports.index = index;
//module.exports.login = login;
module.exports.loginProcess = loginProcess;
//module.exports.chat = chat;

exports.index = function index (req, res){
 res.render('Index', {layout: 'layout', title: 'Index'});
};
exports.login = function login (req, res){
 res.render('login', {title: 'Login'});
};
function loginProcess(req, res){
 console.log(req.body);
 res.send(req.body.username + ' ' + req.body.password);
};
exports.chat = function chat (req, res){
  res.render('chat', {title: 'Chat'});
};