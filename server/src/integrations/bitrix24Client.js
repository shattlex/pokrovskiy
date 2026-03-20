import { env } from "../config/env.js";

function toLeadPayload(lead) {
  return {
    fields: {
      TITLE: `Заявка с сайта: ${lead.name}`,
      NAME: lead.name,
      COMMENTS: lead.message,
      PHONE: [{ VALUE: lead.phone, VALUE_TYPE: "WORK" }],
      EMAIL: [{ VALUE: lead.email, VALUE_TYPE: "WORK" }],
      SOURCE_ID: env.bitrixLeadSource,
      SOURCE_DESCRIPTION: "Форма обратной связи сайта",
      OPENED: "Y",
    },
    params: {
      REGISTER_SONET_EVENT: "Y",
    },
  };
}

export async function sendLeadToBitrix24(lead) {
  if (!env.bitrixWebhookUrl) {
    return { skipped: true };
  }

  const response = await fetch(env.bitrixWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toLeadPayload(lead)),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.error) {
    const errorMessage =
      data.error_description ?? data.error ?? `Bitrix24 request failed with status ${response.status}`;
    const error = new Error(errorMessage);
    error.statusCode = 502;
    throw error;
  }

  return { skipped: false, result: data.result };
}
