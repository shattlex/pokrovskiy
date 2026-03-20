import { actionSchema } from "../validators/actionValidator.js";
import { createAction } from "../services/actionService.js";

export async function createActionController(req, res, next) {
  try {
    const parsed = actionSchema.parse(req.body);
    await createAction(parsed);

    return res.status(202).json({
      success: true,
      message: "Событие кнопки зарегистрировано.",
    });
  } catch (error) {
    return next(error);
  }
}
