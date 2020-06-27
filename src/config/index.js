if (process.env.NODE_ENV !== 'production') {
  require ('dotenv').config ();
}

module.exports = {
  PORT: process.env.PORT,
  CLIENTS_DATA: process.env.CLIENTS_DATA,
  POLICIES_DATA: process.env.POLICIES_DATA,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
};
