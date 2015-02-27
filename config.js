var config = {
     port: 3000,
     secret: 'secret',
     redisPort: 6379,
     redisHost: 'localhost',
     routes: {
       login: '/account/login',
       logout: '/account/logout',
       chat: '/chat',
       facebookAuth: '/auth/facebook',
       facebookAuthCallback: '/auth/facebook/callback',
       googleAuth: '/auth/google',
       googleAuthCallback: '/auth/google/callback'
     },
     host: 'http://localhost:3000',
     facebook: {
      appID: '388142218013049',
      appSecret: 'ad02563566f7d096870248cec4f35c1b'
     },
     google: {
      clientID: '456198845288-q682e11ltcd0v648qstkjm0mrq4dieeb.apps.googleusercontent.com',
      clientSecret: 'islkBWXBkJvyhqFyNFMDAmNd'
     },
     crypto: {
       workFactor: 5000,
       keylen: 32,
       randomSize: 256
     }
};
module.exports = config;