import { createClient } from "redis";

const redis = createClient({
  url: "redis://localhost:6379",
});

export default redis;
