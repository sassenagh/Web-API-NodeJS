let _httpClient = null;
const {CLIENTS_DATA} = require ('../config');

class ClientService {
  constructor({HttpClient}) {
    _httpClient = HttpClient;
  }

  async getUsers () {
    const {data: {clients}} = await _httpClient.get (CLIENTS_DATA);

    return clients;
  }

  async getClientByUserId (id) {
    const users = await this.getUsers ();

    return users.find (user => user.id === id);
  }

  async getClientByUsername (name) {
    const users = await this.getUsers ();

    return users.find (user => user.name === name);
  }

  async getClientByEmail (email) {
    const users = await this.getUsers ();

    return users.find (user => user.email === email);
  }
}

module.exports = ClientService;
