import "dotenv/config";
import { createServer } from "node:http";
import { app } from "./src/app.js";
import { env } from "./src/config/env.js";

const server = createServer(app);

server.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`[api] listening on http://localhost:${env.port}`);
});
