const {Router} = require ('express');
const {AuthMiddleware, RoleMiddleware} = require ('../middlewares');

module.exports = function({PolicyController}) {
  const router = Router ();

  router.get ('/', PolicyController.getAll);
  router.get (
    '/filter',
    [AuthMiddleware, RoleMiddleware],
    PolicyController.get
  );

  return router;
};
