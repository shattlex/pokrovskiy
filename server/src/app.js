import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { actionRouter } from "./routes/actionRoutes.js";
import { contactRouter } from "./routes/contactRoutes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: env.corsOrigin,
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, status: "ok" });
});

app.use("/api/contact", contactRouter);
app.use("/api/actions", actionRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export { app };
