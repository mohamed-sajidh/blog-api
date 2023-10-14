import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ success: false, message: "Permission Denied" });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ success: false, message: "Permission Denied" });
    } else {
      next();
    }
  });
};
