import path from "node:path";
import { randomUUID } from "node:crypto";
import { JsonStore } from "../utils/jsonStore.js";

const store = new JsonStore(path.resolve(process.cwd(), "server/data/button-events.json"));

export async function createAction(payload) {
  const action = {
    id: randomUUID(),
    ...payload,
    createdAt: new Date().toISOString(),
  };

  await store.append(action);
  return action;
}
