var queryString = require('query-string');

class Utils {
  APIPrefix() {
    var prefix;
    var env = queryString.parse(location.search)._env_ || __ENV__;
    switch (env) {
      case 'product':
        prefix = '/';
        break;
      case 'beta':
        prefix = '/';
        break;
      case 'dev':
        prefix = `http://${__LOCAL_SERVER__}`;
        break;
      default:
        prefix = env;
        break;
    }
    return prefix;
  }
}

module.exports = new Utils();