const fetch = require('node-fetch');
let settings = { method: 'Get' };
const container = require('./src/startup/container');
const server = container.resolve('app');
const { CLIENTS_DATA, POLICIES_DATA } = container.resolve('config');

// connection with json clients data
fetch(CLIENTS_DATA, settings).then(() => server.start());
