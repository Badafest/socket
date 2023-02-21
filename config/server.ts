import express from "express";
import { createServer } from "http";

const app = express();

app.use(express.static("public/dist"));

export default createServer(app);
