Chatty
================

Highly-scalable, real-time communication web app using Express, Redis and SocketIO.
User Interface uses extensible React components and Backbone collections to handle React's state.
Authentication Logging is done using RabbitMQ.

*Work still in progress*


####Install and run on local machine:
```
$ git clone https://github.com/accraze/chatty.git
$ cd chatty
$ bower install && npm install
$ npm start

#####Notes:
starting rabbitmq on mac osx: /usr/local/sbin/rabbitmq-server