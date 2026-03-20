export const env = {
  port: Number(process.env.API_PORT ?? 8787),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://127.0.0.1:5173",
  bitrixWebhookUrl: process.env.BITRIX24_WEBHOOK_URL ?? "",
  bitrixLeadSource: process.env.BITRIX24_LEAD_SOURCE ?? "WEBSITE",
};
