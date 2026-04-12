// const express = require("express")
// const router = express.Router()

// const upload = require("../middleware/upload.middleware")
// const songController = require("../controller/song.controller")




// /**
//  * Post 
//  */

// router.post("/", upload.single("songs"), songController.uploadSong)


// module.exports = router

const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload.middleware")
const songController = require("../controller/song.controller")

router.post("/", upload.single("song"), songController.uploadSong)


router.get("/", songController.getSong)

module.exports = router