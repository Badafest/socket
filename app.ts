import server from "./config/server";
import redis from "./config/redis";
import { Server as Socket } from "socket.io";
import socketController from "./config/socket";

(async () => {
  try {
    server.listen(8000);
    console.log("SERVER LISTENING ON PORT", 8000);

    const io = new Socket(server, {
      cors: {
        origin: ["http://localhost:8000"],
      },
    });

    io.on("connection", socketController);

    console.log("SOCKET ...");
  } catch (error) {
    console.log("SERVER NOT STARTED => ", error);
  }
  await redis.connect();
  console.log("REDIS CONNECTED");
  redis.on("error", (error: any) => {
    console.log("Redis Client Error => ", error);
  });
})();
