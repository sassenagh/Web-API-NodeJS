const { ClientService } = require('../../src/services');
const { client, clients } = require('../mocks/client.mock');
const httpMock = require('../mocks/http.mock');

describe('Client Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
