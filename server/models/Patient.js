import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
	fullname: String,
	phone: String
})

export default mongoose.model('Patient', PatientSchema)
