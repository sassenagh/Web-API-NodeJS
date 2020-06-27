let _httpClient = null;
const {CLIENTS_DATA} = require ('../config');
const {POLICIES_DATA} = require ('../config');

class PolicyService {
  constructor({HttpClient}) {
    _httpClient = HttpClient;
  }

  async getUsers () {
    const {data: {clients}} = await _httpClient.get (CLIENTS_DATA);

    return clients;
  }

  async getPolicies () {
    const {data: {policies}} = await _httpClient.get (POLICIES_DATA);

    return policies;
  }

  async getPoliciesByUsername (name) {
    const users = await this.getUsers ();
    const policies = await this.getPolicies ();

    const user = users.find (user => user.name === name);

    return policies.filter (policy => policy.clientId === user.id);
  }

  async getClientByPolicyId (id) {
    const users = await this.getUsers ();
    const policies = await this.getPolicies ();

    const policy = policies.find (policy => policy.id === id);

    return users.find (user => user.id === policy.clientId);
  }
}

module.exports = PolicyService;
