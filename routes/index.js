const  { Router } = require ('express');
const router = Router();
const PostRouter = require("./Post")
const UsersRouter = require("./users")
router.use("/", UsersRouter);
router.use("/", PostRouter);

module.exports = router