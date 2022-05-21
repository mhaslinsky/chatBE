import express from "express";
import { Server } from "socket.io";
import namespaces from "./data/namespaces";

const app = express();
app.use(express.static(__dirname + "/public"));
const expressServer = app.listen(4000, () => {
  console.log("socket.io listening on PORT 4000");
});
const io = new Server(expressServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  let nsData = namespaces.map((ns) => {
    return { id: ns.id, img: ns.img, endpoint: ns.endpoint };
  });
  socket.emit("nsList", nsData);
});

namespaces.forEach((ns) => {
  io.of(ns.endpoint).on("connection", (socket) => {
    // console.log(`${socket.id} has joined ${ns.endpoint}!`);
  });
});
