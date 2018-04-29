import http from "http";

import { HOST, PORT, UserSettings } from "./configuration";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Node.JS: Hello World\n");
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  console.log("Using user settings", UserSettings);
});
