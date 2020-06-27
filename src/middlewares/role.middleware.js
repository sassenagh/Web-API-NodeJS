module.exports = function (req, res, next) {
  try {
    const role = req.user.role;

    if (role != 'admin') {
      throw new Error ();
    }
    next ();
  } catch (e) {
    res.status (403).send ({status: 403, message: 'Permission denied.'});
  }
};
