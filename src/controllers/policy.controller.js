let _policyService = null;
class PolicyController {
  constructor({PolicyService}) {
    _policyService = PolicyService;
  }

  async get (req, res) {
    const {id, name} = req.query;

    if (name) {
      const policies = await _policyService.getPoliciesByUsername (name);
      return res.send (policies);
    } else if (id) {
      const user = await _policyService.getClientByPolicyId (id);
      return res.send (user);
    }
    return res.status (400).send ({status: 400, message: 'Bad Request'});
  }

  async getAll (req, res) {
    const policies = await _policyService.getPolicies ();
    return res.send (policies);
  }
}

module.exports = PolicyController;
