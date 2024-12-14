const db = require("../db/connection");
const jwt = require('jsonwebtoken');

const basicAuth = (req, res, next) => {
  try {
    // Get the 'Authorization' header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return res
        .status(401)
        .send( "Authorization header missing or invalid!" );
    }

    // Decode the Base64-encoded credentials
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString(
      "ascii"
    );
    const [email, password] = credentials.split(":");

    if (!email || !password) {
      return res.status(401).send( "Email or password missing!" );
    }

    // Verify the user exists
    db.query(
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      [email, password],
      async (err, results) => {
        if (err) {
          return res.status(500).send("Error retrieving user");
        }

        if (results.length === 0) {
          return res.status(401).send( "Invalid email or password" );
        }

        const user = results[0];
        req.user = user;
        // Proceed to the next middleware or route handler
        next();
      }
    );
  } catch (error) {
    console.error("Error in Basic Authentication Middleware:", error);
    return res.status(500).send( "Internal Server Error" );
  }
};


// Middleware function to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];  // Get the token from the 'Authorization' header

  if (!token) return res.status(401).json({ message: 'Access denied' });  // If no token is provided, deny access

  // Verify the JWT token
  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });  // If the token is invalid, send a 403 error
    req.user = user;  // Store the decoded user data in the request object
    next();  // Proceed to the next middleware/route handler
  });
};


module.exports = { basicAuth, authenticateToken };
