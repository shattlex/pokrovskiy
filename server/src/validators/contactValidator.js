import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(120, "Имя слишком длинное"),
  email: z
    .string()
    .trim()
    .email("Введите корректный email")
    .max(255, "Email слишком длинный"),
  phone: z
    .string()
    .trim()
    .min(6, "Введите корректный телефон")
    .max(30, "Телефон слишком длинный"),
  message: z
    .string()
    .trim()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(5000, "Сообщение слишком длинное"),
});
