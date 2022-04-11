require("dotenv").config();

module.exports = function (req, res, next) {
  const requiresAuth = process.env.REQUIRES_AUTH;
  if (!requiresAuth || requiresAuth === "false") return next();

  if (!req.user.isAdmin) return res.status(403).send("Access denied.");
  next();
};
