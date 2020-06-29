const mcache = require ('memory-cache');
const {CACHE_KEY} = require ('../config');

module.exports = function (duration) {
  return (req, res, next) => {
    const {id, name} = req.query;
    if (id) {
      query = req.query.id;
    } else {
      query = req.query.name;
    }
    const key = CACHE_KEY + req.originUrl + query || req.url + query;
    const cachedBody = mcache.get (key);

    if (cachedBody) {
      return res.send (JSON.parse (cachedBody));
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put (key, body, duration * 1000);
        res.sendResponse (body);
      };
      next ();
    }
  };
};
