import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  id: String,
  fullname: String,
  phone: String,
});
PatientSchema.virtual("appointments", {
  ref: "Appointment",
  localField: "_id",
  foreignField: "patient",
  justOne: true, // set true for one-to-one relationship
});
export default mongoose.model("Patient", PatientSchema);
