const express = require("express");
const router = express.Router();

const ChatController = require("../controllers/chatController");

router.get("/chat", ChatController.generateChat);

// router.get('/chat', (req, res) => {
//     res.send('Hello from the chat route!');
//   });

module.exports = router;

//app.use("/chat", chatRouter);
