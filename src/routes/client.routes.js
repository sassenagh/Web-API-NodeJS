const {Router} = require ('express');
const {AuthMiddleware} = require ('../middlewares');

module.exports = function({ClientController}) {
  const router = Router ();

  router.get ('/', ClientController.getAll);
  router.get ('/filter', AuthMiddleware, ClientController.get);

  return router;
};
