import messages from "../messages/Messages";

export default (socket: any) => {
  socket.on("username", (username: string) => {
    socket.data.username = username;
    socket.broadcast.emit("connected", socket.data.username);
    socket.emit("connected", socket.data.username);
  });
  socket.on("add_message", async (text: string) => {
    const sender = socket.data.username;
    messages.addMessage(sender, text);
    socket.broadcast.emit("new_message", { sender, text });
    socket.emit("new_message", { sender, text });
  });
  socket.on("get_messages", async () => {
    socket.emit("all_messages", await messages.getMessages());
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("disconnected", socket.data.username);
  });
};
