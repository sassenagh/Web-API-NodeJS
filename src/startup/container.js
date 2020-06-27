const {createContainer, asClass, asValue, asFunction} = require ('awilix');
const axios = require ('axios').default;

//config
const config = require ('../config');
const app = require ('.');

//services
const {
  HomeService,
  ClientService,
  PolicyService,
  AuthService,
} = require ('../services');

//controllers
const {
  HomeController,
  ClientController,
  PolicyController,
  AuthController,
} = require ('../controllers');

//routes
const {
  HomeRoutes,
  ClientRoutes,
  PolicyRoutes,
  AuthRoutes,
} = require ('../routes/index.routes');
const Routes = require ('../routes');

const container = createContainer ();

container
  .register ({
    app: asClass (app).singleton (),
    router: asFunction (Routes).singleton (),
    config: asValue (config),
  })
  .register ({
    HomeService: asClass (HomeService).singleton (),
    ClientService: asClass (ClientService).singleton (),
    PolicyService: asClass (PolicyService).singleton (),
    AuthService: asClass (AuthService).singleton (),
  })
  .register ({
    HomeController: asClass (HomeController.bind (HomeController)).singleton (),
    ClientController: asClass (
      ClientController.bind (ClientController)
    ).singleton (),
    PolicyController: asClass (
      PolicyController.bind (PolicyController)
    ).singleton (),
    AuthController: asClass (AuthController.bind (AuthController)).singleton (),
  })
  .register ({
    HomeRoutes: asFunction (HomeRoutes).singleton (),
    ClientRoutes: asFunction (ClientRoutes).singleton (),
    PolicyRoutes: asFunction (PolicyRoutes).singleton (),
    AuthRoutes: asFunction (AuthRoutes).singleton (),
  })
  .register ({
    HttpClient: asValue (axios),
  });

module.exports = container;
