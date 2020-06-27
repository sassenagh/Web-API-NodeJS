const { Router } = require('express');
const {
  AuthMiddleware,
  RoleMiddleware,
  CacheMiddleware,
} = require('../middlewares');
const { CACHE_TIME } = require('../helpers');

module.exports = function ({ PolicyController }) {
  const router = Router();

  router.get('/', PolicyController.getAll);
  router.get(
    '/filter',
    [AuthMiddleware, RoleMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    PolicyController.get
  );

  return router;
};
