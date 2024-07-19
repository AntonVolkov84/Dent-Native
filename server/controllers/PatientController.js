import PatientModel from "../models/Patient.js";
import { validationResult } from "express-validator";
import { viber } from "./ViberController.js";

export const addPatient = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const doc = new PatientModel({
      fullname: req.body.fullname,
      phone: req.body.phone,
    });
    const patient = await doc.save();
    res.json({ message: `Пациент ${patient.fullname} добавлен`, patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать Patient",
    });
  }
};
export const allPatient = async (req, res) => {
  try {
    const patient = await PatientModel.find();
    res.json(patient);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось вывести Patient",
    });
  }
};
export const delPatient = async (req, res) => {
  try {
    const patient = await PatientModel.findOne({
      _id: req.body.id,
    });
    if (!patient) {
      return res.status(402).json({ message: "Пациент не найден" });
    }
    await PatientModel.findOneAndDelete({
      _id: req.body.id,
    });
    res.json({ message: `Пациент ${patient.fullname} удален` });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось удалить Patient",
    });
  }
};
export const onePatient = async (req, res) => {
  try {
    const patient = await PatientModel.findOne({
      _id: req.body.id,
    });
    if (!patient) {
      return res.status(402).json({ message: "Пациент не найден" });
    }
    res.json({ message: `Пациент ${patient.fullname} найден`, patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось найти пациента",
    });
  }
};
export const patchPatient = async (req, res) => {
  try {
    const patient = await PatientModel.findOne({
      _id: req.body.id,
    });
    if (!patient) {
      return res.status(402).json({ message: "Пациент не найден" });
    }
    await PatientModel.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      {
        fullname: req.body.fullname,
        phone: req.body.phone,
      }
    );
    res.json({ message: `Пациент ${patient.fullname} изменен` });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось изменить Patient",
    });
  }
};
