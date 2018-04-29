import http from "http";

import { HOST, PORT, UserSettings } from "./configuration";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Node.JS: Hello World!</h1></body></html");
  console.log(`${new Date()} Request handled: ${res.statusCode}`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  console.log("Using user settings", UserSettings);
});
