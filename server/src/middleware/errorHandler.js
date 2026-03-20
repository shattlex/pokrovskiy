import { ZodError } from "zod";

export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
}

export function errorHandler(err, req, res, next) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: err.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  // eslint-disable-next-line no-console
  console.error("[api:error]", err);

  if (typeof err?.statusCode === "number") {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    error: "Internal server error",
  });
}
