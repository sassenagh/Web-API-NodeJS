const { ClientService, AuthService } = require('../../src/services');
const { client, client2, clients } = require('../mocks/client.mock');
const httpMock = require('../mocks/http.mock');

describe('Client Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should login existing user', async () => {
    httpMock.getClientByEmail.mockReturnValue({ data: { client } });
    const _authService = new AuthService({ ClientService: httpMock });
    const expected = await _authService.logIn(client);
    expect(typeof expected.token).toEqual('string');
  });

  it('Should find a client by name', async () => {
    httpMock.get.mockReturnValue({ data: { clients } });
    const _clientService = new ClientService({ HttpClient: httpMock });
    const expected = await _clientService.getClientByUsername(client.name);
    expect(expected).toMatchObject(client);
  });

  it('Should find a client by id', async () => {
    httpMock.get.mockReturnValue({ data: { clients } });
    const _clientService = new ClientService({ HttpClient: httpMock });
    const expected = await _clientService.getClientByUserId(client.id);
    expect(expected).toMatchObject(client);
  });
});
