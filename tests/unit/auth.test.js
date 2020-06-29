const { AuthService } = require('../../src/services');
const { client } = require('../mocks/client.mock');
const httpMock = require('../mocks/http.mock');

describe('Auth Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should login existing user', async () => {
    httpMock.getClientByEmail.mockReturnValue({ data: { client } });
    const _authService = new AuthService({ ClientService: httpMock });
    const expected = await _authService.logIn(client);
    expect(typeof expected.token).toEqual('string');
  });
});
