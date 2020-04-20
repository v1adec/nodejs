var convict = require('convict');

// Define a schema
var config = convict({
    env: {
        doc: 'The application environment.',
        format: ['api', 'proxy', 'test', 'proxy-container'],
        default: 'proxy',
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
    },
    database: {
        doc: 'Database name',
        format: String,
        default: 'main_db',
        env: 'DATABASE',
        arg: 'database'
    },
    database_url: {
        doc: 'Database address',
        format: String,
        default: '127.0.0.1',
        env: 'DATABASE_URL',
        arg: 'database_url'
    }
});

const env = config.get('env');
config.loadFile('./config/' + env + '.json');
config.validate({ allowed: 'strict' });

module.exports = config;
