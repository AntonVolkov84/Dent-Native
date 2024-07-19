import mongoose from "mongoose";
import { Schema } from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    id: { type: Schema.Types.ObjectId, ref: "Patient" },
    dentNumber: Number,
    diagnosis: String,
    price: Number,
    date: String,
    time: String,
    patient: { type: Object, require: false },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);
