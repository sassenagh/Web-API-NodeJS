const {Router} = require ('express');

module.exports = function({ClientController}) {
  const router = Router ();

  router.get ('/', ClientController.getAll);
  router.get ('/:clientId', ClientController.get);
  router.get ('/login/:name', ClientController.get);

  return router;
};
