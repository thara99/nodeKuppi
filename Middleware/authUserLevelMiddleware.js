const authLevelMiddleware = (req, res, next) => {
  if (req.user && (req.user.userLevel === 1 || req.user.userLevel === 2)) {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Access denied. Insufficient user level." });
  }
};

module.exports = authLevelMiddleware;
