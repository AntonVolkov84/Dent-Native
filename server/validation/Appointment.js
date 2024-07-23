import { body } from "express-validator";

const validatotionAppointments = [
  body("patient", "Укажите ID").notEmpty(),
  body("dentNumber", "Номер зуба не менее 1 и не более 48").isInt({
    min: 1,
    max: 48,
  }),
  body("diagnosis", "Поле название проблемы не должно быть пустым").isLength({
    min: 3,
  }),
  body("price", "Поле цены не должно быть пустым").notEmpty(),
  body("date", "Поле даты не должно быть пустым").notEmpty(),
  body("time", "Поле времени не должно быть пустым").notEmpty(),
];
export default validatotionAppointments;
