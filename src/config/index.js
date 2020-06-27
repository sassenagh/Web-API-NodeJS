if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  PORT: process.env.PORT,
  CLIENTS_DATA: process.env.CLIENTS_DATA,
  POLICIES_DATA: process.env.POLICIES_DATA,
  JWT_SECRET: process.env.JWT_SECRET,
  CACHE_KEY: process.env.CACHE_KEY,
};
