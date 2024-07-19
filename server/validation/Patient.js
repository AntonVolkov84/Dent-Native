import { body } from 'express-validator'

const validatotionPatient = [
	body('fullname', 'Укажите более длинное имя').isLength({ min: 3 }),
	body('phone', 'Минимум 10 знаков в телефонном номере').isLength({
		min: 10
	})
]
export default validatotionPatient
