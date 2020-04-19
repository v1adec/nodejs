const app = require('./server');

const config = require('./config.js');

app.listen(config.get('port'), config.get('ip'), () => console.log('App started successfully on port http://127.0.0.1:3001'));
