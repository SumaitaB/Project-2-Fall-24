const express = require("express");
const { createQuote, updateQuote, deleteByUser, acceptByUser, rejectByUser, acceptByAdmin, rejectByAdmin, getUserOrders, getAdminOrders, paymentRequest, makePayment, getDashboardInfo, getQuotesReport, getLargestDriveway, getOverdueBills, cancelPaymentByUser, updatePaymentByAdmin } = require("../controllers/quotesController");
const { basicAuth, authenticateToken } = require("../middleware/verifyUser");

const router = express.Router();

// Basic Auth
router.post("/create",basicAuth, createQuote);
router.put("/update",basicAuth, updateQuote);
router.delete("/delete",basicAuth, deleteByUser);
router.post("/accept-user",basicAuth, acceptByUser);
router.post("/reject-user",basicAuth, rejectByUser);
router.post("/accept-admin",basicAuth, acceptByAdmin);
router.post("/reject-admin",basicAuth, rejectByAdmin);
router.get("/order-user",basicAuth, getUserOrders);
router.get("/order-admin",basicAuth, getAdminOrders);
router.post("/payment-request",basicAuth, paymentRequest);
router.post("/pay",basicAuth, makePayment);
router.get("/dashboard",basicAuth,getDashboardInfo)
router.get("/report",basicAuth,getQuotesReport)
router.get("/area",basicAuth,getLargestDriveway)
router.get("/overdue",basicAuth,getOverdueBills)
router.put("/payment-reject",basicAuth,cancelPaymentByUser)
router.put("/payment-update",basicAuth,updatePaymentByAdmin)

// JWT Auth
// router.post("/create",authenticateToken, createQuote);
// router.put("/update",authenticateToken, updateQuote);
// router.delete("/delete",authenticateToken, deleteByUser);
// router.post("/accept-user",authenticateToken, acceptByUser);
// router.post("/reject-user",authenticateToken, rejectByUser);
// router.post("/accept-admin",authenticateToken, acceptByAdmin);
// router.post("/reject-admin",authenticateToken, rejectByAdmin);
// router.get("/order-user",authenticateToken, getUserOrders);
// router.get("/order-admin",authenticateToken, getAdminOrders);
// router.post("/payment-request",authenticateToken, paymentRequest);
// router.post("/pay",authenticateToken, makePayment);
// router.get("/dashboard",authenticateToken,getDashboardInfo)
// router.get("/report",authenticateToken,getQuotesReport)
// router.get("/area",authenticateToken,getLargestDriveway)
// router.get("/overdue",authenticateToken,getOverdueBills)
// router.put("/payment-reject",authenticateToken,cancelPaymentByUser)
// router.put("/payment-update",authenticateToken,updatePaymentByAdmin)

module.exports = router;
