const express = require("express");
const { createUser, loginUser, bigClients, difficultClients, prospectiveClients, getGoodClients, getBadClients } = require("../controllers/userController");
const { basicAuth, authenticateToken } = require("../middleware/verifyUser");

const router = express.Router();

//Basic Auth
router.post("/create", createUser);
router.post('/login',loginUser)
router.get("/big-clients",basicAuth,bigClients)
router.get("/difficult-clients",basicAuth,difficultClients)
router.get("/prospective-clients",basicAuth,prospectiveClients)
router.get("/good-clients",basicAuth,getGoodClients)
router.get("/bad-clients",basicAuth,getBadClients)

//JWT Auth
// router.post("/create", createUser);
// router.post('/login',loginUser)
// router.get("/big-clients",authenticateToken,bigClients)
// router.get("/difficult-clients",authenticateToken,difficultClients)
// router.get("/prospective-clients",authenticateToken,prospectiveClients)
// router.get("/good-clients",authenticateToken,getGoodClients)
// router.get("/bad-clients",authenticateToken,getBadClients)

module.exports = router;
