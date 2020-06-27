let _clientService = null;

class ClientController {
  constructor({ClientService}) {
    _clientService = ClientService;
  }

  async get (req, res) {
    const {id, name} = req.query;

    if (name) {
      const user = await _clientService.getClientByUsername (name);
      return res.send (user);
    } else if (id) {
      const user = await _clientService.getClientByUserId (id);
      return res.send (user);
    }
    return res.status (400).send ({status: 400, message: 'Bad Request'});
  }

  async getAll (req, res) {
    const clients = await _clientService.getUsers ();
    return res.send (clients);
  }
}

module.exports = ClientController;
