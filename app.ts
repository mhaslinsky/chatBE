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
    socket.emit("nsRoomLoad", ns.rooms);
    //when someone emits a join request, we take the room they want to join
    //and pass back the number of users in it
    socket.on("joinRoom", async (roomToJoin, numberOfUsersCallback) => {
      socket.join(roomToJoin);
      //returns set of all sockets connected to room in ns
      const ids = await io.of(ns.endpoint).in(roomToJoin).allSockets();
      const numOfUsersConnected = ids.size;
      numberOfUsersCallback(numOfUsersConnected);
    });
    socket.on("leaveRoom", (roomToLeave) => {
      socket.leave(roomToLeave);
    });
    socket.on("newMessageToServer", (msg) => {
      const roomTitle = Object.keys(socket.rooms)[1];
      io.of(ns.endpoint).to(roomTitle).emit("messageToClients", msg);
    });
  });
});
