const router = require("express").Router();
const cocktailRoutes = require("./cocktails");

// Book routes
router.use("/cocktails", cocktailRoutes);

module.exports = router;