//module.exports.loginProcess = loginProcess;
var util = require('../middleware/utilities');
var config = require('../config');

exports.index = function index (req, res){
 res.render('Index', {layout: 'layout', title: 'Index'});
};

exports.login = function login (req, res){
 res.render('login', {title: 'Login', message: req.flash('error')});
};

// function loginProcess(req, res){
//   var isAuth = util.auth(req.body.username, req.body.password, req.session);
//      if (isAuth) {
//        res.redirect(config.routes.chat);
//      }else {
//        req.flash('error', 'Wrong Username or Password');
//        res.redirect(config.routes.login);
//     }
// };
exports.logOut = function logOut(req, res){
     util.logOut(req);
     res.redirect('/');
};

exports.chat = function chat (req, res){
  res.render('chat', {title: 'Chat'});
};