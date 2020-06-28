const { PolicyService } = require('../../src/services');
const { client, client2, clients } = require('../mocks/client.mock');
const { policy, policies } = require('../mocks/policy.mock');
const httpMock = require('../mocks/http.mock');

describe('Policy Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should get list of policies linked to a client', async () => {
    httpMock.get.mockReturnValue({ data: { policies, clients } });
    const _policyService = new PolicyService({ HttpClient: httpMock });
    const expected = await _policyService.getPoliciesByUsername(client.name);
    expect(typeof expected).toEqual('object');
  });

  it('Should get the user linked to a policy number', async () => {
    httpMock.get.mockReturnValue({ data: { policies, clients } });
    const _policyService = new PolicyService({ HttpClient: httpMock });
    const expected = await _policyService.getClientByPolicyId(policy.id);
    expect(expected).toMatchObject(client);
  });
});
