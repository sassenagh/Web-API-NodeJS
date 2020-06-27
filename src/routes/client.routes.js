const { Router } = require('express');
const { AuthMiddleware, CacheMiddleware } = require('../middlewares');
const { CACHE_TIME } = require('../helpers');

module.exports = function ({ ClientController }) {
  const router = Router();

  router.get('/', ClientController.getAll);
  router.get(
    '/filter',
    [AuthMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    ClientController.get
  );

  return router;
};
