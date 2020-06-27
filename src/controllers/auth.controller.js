let _authService = null;

class AuthController {
  constructor({AuthService}) {
    _authService = AuthService;
  }

  async logIn (req, res) {
    const {body} = req;
    const creds = await _authService.logIn (body);
    return res.send (creds);
  }
}

module.exports = AuthController;
