const getFormData = (event) => {
  event.preventDefault();
  return new FormData(event.target);
};

export const MessageForm = (socket) => {
  const form = $("<form></form>").submit((event) => {
    const formData = getFormData(event);
    socket.emit("add_message", formData.get("message"));
  });
  $("<input/>").attr("name", "message").appendTo(form);
  return form;
};

export const UsernameForm = (socket) => {
  const form = $("<form></form>").submit((event) => {
    const formData = getFormData(event);
    socket.emit("username", formData.get("username"));
  });
  $("<input/>").attr("name", "username").appendTo(form);
  return form;
};

export const StatusBox = (username, status) =>
  $("<div></div>").text(`${username} is ${status}`);

export const MessageBox = (message) =>
  $("<div></div>").text(message.sender + " writes " + message.text);
