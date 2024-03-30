import errorRespone from "../utils/error.util.mjs";
import { checkToken } from "../utils/token.util.mjs";

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json(errorRespone(403, "Tidak ada token"));
  }

  try {
    const decoded = checkToken(token);
    req.gue = decoded;
    next();
  } catch (error) {
    return res.status(401).json(errorRespone(401, "Token tidak valid"));
  }
}

export default verifyToken;
