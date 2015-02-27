var util = require('../middleware/utilities');
var user = require('../passport/user');
var config = require('../config');

module.exports.register = register;
module.exports.registerProcess = registerProcess;

exports.index = function index (req, res){
 res.render('Index', {layout: 'layout', title: 'Index'});
};

exports.login = function login (req, res){
 res.render('login', {title: 'Login', message: req.flash('error')});
};

exports.logOut = function logOut(req, res){
     util.logOut(req);
     res.redirect('/');
};

exports.chat = function chat (req, res){
  res.render('chat', {title: 'Chat'});
};

function register(req, res){
   res.render('register', {title: 'Register', message: req.flash('error')});
};

function registerProcess (req, res) {
     if (req.body.username && req.body.password)
     {
       user.addUser(req.body.username, req.body.password, config.crypto.workFactor, function(err, profile){
         if (err) {
           req.flash('error', err);
           res.redirect(config.routes.register);
         }else{
           req.login(profile, function(err){
             res.redirect('/chat');
           });
         } 
       });
     }else{
       req.flash('error', 'Please fill out all the fields');
       res.redirect(config.routes.register);
    } 
};