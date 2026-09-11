// Blocks access to a route if the user doesn't have an active session,
// and sends them to the login page instead. Same behaviour as the
// original requireLogin() that used to live inline in src/index.js.
function requireLogin(req, res, next) {
  if (!req.session.userId) {
    return res.redirect("/login");
  }
  next();
}

module.exports = requireLogin;
