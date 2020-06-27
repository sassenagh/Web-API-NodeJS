let _clientService = null;

class ClientController {
  constructor({ClientService}) {
    _clientService = ClientService;
  }

  async get (req, res) {
    const {clientId, name} = req.params;

    if (name) {
      const user = await _clientService.getClientByUsername (name);
      return res.send (user);
    } else if (clientId) {
      const user = await _clientService.getClientByUserId (clientId);
      return res.send (user);
    }
  }

  async getAll (req, res) {
    const clients = await _clientService.getUsers ();
    return res.send (clients);
  }
}

module.exports = ClientController;
