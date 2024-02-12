// const exp = require("express");
import express from "express";

import { WebSocketServer } from "ws";

const panodu = express();

const port = 9999;

const server = panodu.listen(port, () => {
  console.log("sir i started my work  ");
});

// panodu.get("/", (req, res) => {
//   res.send("hi sir how are u , what u want ? ");
// });

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("data from client is " + data);

    ws.send("ok sir i will process the order ");
  });
});
