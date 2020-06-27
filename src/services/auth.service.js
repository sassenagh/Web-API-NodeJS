const {generateToken} = require ('../helpers/jwt.helper');
let _clientService = null;

class AuthService {
  constructor({ClientService}) {
    _clientService = ClientService;
  }

  async logIn (user) {
    const {email} = user;
    const userExist = await _clientService.getClientByEmail (email);
    if (!userExist) {
      const error = new Error ();
      error.status = 404;
      error.message = 'User does not exist';
      throw error;
    }

    const userToEncode = {
      email: userExist.email,
      id: userExist._id,
      role: userExist.role,
    };

    const token = generateToken (userToEncode);

    return {token, client: userExist};
  }
}

module.exports = AuthService;
