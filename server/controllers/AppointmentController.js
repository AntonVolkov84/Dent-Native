import AppointmentModel from "../models/Appointment.js";
import { validationResult } from "express-validator";
import PatientModel from "../models/Patient.js";
import Appointment from "../models/Appointment.js";

export const addAppointment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const patient = await PatientModel.findOne({ _id: req.body.patient });
    if (!patient) {
      return res.status(402).json({ message: "Пациент не найден!" });
    }
    const doc = new AppointmentModel({
      dentNumber: req.body.dentNumber,
      diagnosis: req.body.diagnosis,
      price: req.body.price,
      date: req.body.date,
      time: req.body.time,
      patient: patient,
    });
    const appointment = await doc.save();
    res.json({
      message: `Пациент на ${appointment.date} на ${appointment.time} с ${appointment.diagnosis} добавлен`,
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать Appointment",
    });
  }
};
export const patchAppointment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const appointment = AppointmentModel.findOne({ _id: req.body.id });
    const patient = appointment.patient;
    await AppointmentModel.updateOne(
      {
        _id: req.body.id,
      },
      {
        id: req.body.id,
        dentNumber: req.body.dentNumber,
        diagnosis: req.body.diagnosis,
        price: req.body.price,
        date: req.body.date,
        time: req.body.time,
        patient: patient,
      }
    );
    res.json({
      message: "Заявка изменена",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось изменить Appointment",
    });
  }
};

export const allAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.aggregate([
      { $sort: { time: 1 } },
      {
        $group: {
          _id: { data: "$date" },
          Appointments: {
            $push: {
              fullname: "$patient.fullname",
              phone: "$patient.phone",
              time: "$time",
              diagnosis: "$diagnosis",
              price: "$price",
              dentNumber: "$dentNumber",
              date: "$date",
              id: "$_id",
            },
          },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.json(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось вывести Appointment",
    });
  }
};
export const allPatientAppointment = async (req, res) => {
  try {
    const patientId = req.params.id;
    const appointment = await Appointment.aggregate([
      { $sort: { time: 1 } },
      { $match: { "patient.phone": patientId } },
    ]);
    res.json(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось вывести Appointment",
    });
  }
};

export const delAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findOneAndDelete({
      _id: req.params.id,
    });
    if (!appointment) {
      return res.status(402).json({ message: "Appointment не найден" });
    }
    await AppointmentModel.findOneAndDelete({
      _id: req.body.id,
    });
    res.json({
      message: `Прием пациента ${appointment.patient.fullname} записанного на ${appointment.date} на ${appointment.time} удален`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось вывести Appointment",
    });
  }
};
