import { MessageForm, MessageBox, StatusBox } from "./elements";

$(document).ready(() => {
  const socket = io();
  let username = "anonymous";

  const root = $("#root");

  const messagesContainer = $("<div></div>").appendTo(root);

  socket.on("connect", () => {
    socket.emit("username", username);
    socket.emit("get_messages");
  });

  socket.on("all_messages", (messages) => {
    messagesContainer.append(messages.map(MessageBox));
  });

  socket.on("connected", (user) => {
    messagesContainer.append(StatusBox(user, "connected"));
  });

  socket.on("new_message", (message) => {
    messagesContainer.append(MessageBox(message));
  });

  socket.on("disconnected", (user) => {
    messagesContainer.append(StatusBox(user, "disconnected"));
  });

  root.append(MessageForm(socket, username));
});
