import { contactSchema } from "../validators/contactValidator.js";
import { createLead } from "../services/contactService.js";

export async function createContactController(req, res, next) {
  try {
    const parsed = contactSchema.parse(req.body);
    await createLead(parsed);

    return res.status(201).json({
      success: true,
      message: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    });
  } catch (error) {
    return next(error);
  }
}
