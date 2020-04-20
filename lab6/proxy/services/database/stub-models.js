const FactoryGirl = require('factory-girl');
const factory = FactoryGirl.factory;
factory.setAdapter(new FactoryGirl.ObjectAdapter());
class LogRequests {
}
factory.define('LogRequests', LogRequests, {
    date: () => new Date().toJSON().slice(0, 19).replace('T', ' '),
    url_path: () => Math.random() >= 0.5 ? '/' : '/log-request',
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
});
module.exports = { factory };
