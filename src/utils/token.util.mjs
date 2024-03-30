import jwt from "jsonwebtoken";

function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 60,
  });
}

function checkToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY);
}

export { generateToken, checkToken };
