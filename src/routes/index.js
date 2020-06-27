const express = require ('express');
const cors = require ('cors');
const helmet = require ('helmet');
const compression = require ('compression');
require ('express-async-errors');
const {NotFoundMiddleware, ErrorMiddleware} = require ('../middlewares');

module.exports = function({
  HomeRoutes,
  ClientRoutes,
  PolicyRoutes,
  AuthRoutes,
}) {
  const router = express.Router ();
  const apiRoutes = express.Router ();

  apiRoutes
    .use (express.json ())
    .use (cors ())
    .use (helmet ())
    .use (compression ());

  apiRoutes.use ('/home', HomeRoutes);
  apiRoutes.use ('/clients', ClientRoutes);
  apiRoutes.use ('/policies', PolicyRoutes);
  apiRoutes.use ('/', AuthRoutes);

  router.use ('/api', apiRoutes);

  router.use (NotFoundMiddleware);
  router.use (ErrorMiddleware);

  return router;
};
