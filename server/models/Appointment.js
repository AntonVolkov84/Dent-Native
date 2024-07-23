import mongoose from "mongoose";
import { Schema } from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    dentNumber: Number,
    diagnosis: String,
    price: Number,
    date: String,
    time: String,
    patient: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);
