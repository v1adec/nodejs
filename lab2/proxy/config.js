var convict = require('convict');

// Define a schema
var config = convict({
    env: {
        doc: 'The application environment.',
        format: ['api', 'proxy'],
        default: 'development',
        env: 'NODE_ENV'
    },
    api_url: {
        doc: 'The API address.',
        format: 'url',
        default: 'http://127.0.0.1:3000',
        env: 'API_URL',
    },
    ip: {
        doc: 'The IP address to bind.',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: 'IP_ADDRESS',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3001,
        env: 'PORT',
        arg: 'port'
    }
});

const env = config.get('env');
config.loadFile('./' + env + '/config.json');
config.validate({ allowed: 'strict' });

module.exports = config;
