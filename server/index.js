import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as AppointmentController from "./controllers/AppointmentController.js";
import * as PatientController from "./controllers/PatientController.js";
import validatotionPatient from "./validation/Patient.js";
import validatotionAppointments from "./validation/Appointment.js";

const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://antvolkov84:9iHyhruCp9NtfuvH@cluster0.2jyu76d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Mongo DB OK!!!"))
  .catch((error) => console.log(error));
app.get("/patients", PatientController.allPatient);
app.get("/patient", PatientController.onePatient);
app.patch("/patients", validatotionPatient, PatientController.patchPatient);
app.delete("/patients", PatientController.delPatient);
app.post("/patients", validatotionPatient, PatientController.addPatient);
app.get("/appointments", AppointmentController.allAppointment);
app.delete("/appointments/:id", AppointmentController.delAppointment);
app.get("/appointments/:id", AppointmentController.allPatientAppointment);
app.patch("/appointments", validatotionAppointments, AppointmentController.patchAppointment);
app.post("/appointments", validatotionAppointments, AppointmentController.addAppointment);

app.listen(6666, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Server Runned!!!");
});
