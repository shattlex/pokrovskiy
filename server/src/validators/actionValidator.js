import { z } from "zod";

export const actionSchema = z.object({
  buttonId: z.string().trim().min(2).max(120),
  page: z.string().trim().max(255).optional(),
  details: z.record(z.string(), z.unknown()).optional(),
});
