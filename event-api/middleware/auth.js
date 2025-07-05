const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

const checkRole = (role) => (req, res, next) => {
  if (req.user?.role !== role) return res.status(403).json({ message: "Access denied" });
  next();
};

const checkRoles = (roles) => (req, res, next) => {
  if (!roles.includes(req.user?.role)) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

module.exports = { verifyToken, checkRole, checkRoles };
