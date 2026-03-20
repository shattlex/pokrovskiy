import path from "node:path";
import { randomUUID } from "node:crypto";
import { JsonStore } from "../utils/jsonStore.js";
import { sendLeadToBitrix24 } from "../integrations/bitrix24Client.js";

const store = new JsonStore(path.resolve(process.cwd(), "server/data/leads.json"));

export async function createLead(payload) {
  const lead = {
    id: randomUUID(),
    ...payload,
    createdAt: new Date().toISOString(),
  };

  await store.append(lead);
  await sendLeadToBitrix24(lead);

  return lead;
}
