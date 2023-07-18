const router = require("express").Router()

router.get("/", (req, res) => {
    return res.send("Home page nodemon")
})

module.exports = router