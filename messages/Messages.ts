import redis from "../config/redis";

export interface IMessage {
  sender: string;
  text: string;
}

class Messages {
  addMessage(sender: string, text: string) {
    redis.lPush("messages", JSON.stringify({ sender, text }));
  }

  async getMessages() {
    const messages = await redis.lRange("messages", 0, -1);
    return messages.map((message) => JSON.parse(message));
  }
}

export default new Messages();
