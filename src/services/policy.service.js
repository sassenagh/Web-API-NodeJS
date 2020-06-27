let _httpClient = null;
const {POLICIES_DATA} = require ('../config');

class PolicyService {
  constructor({HttpClient}) {
    _httpClient = HttpClient;
  }
}

module.exports = PolicyService;
