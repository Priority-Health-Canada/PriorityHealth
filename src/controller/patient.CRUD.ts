import { Request, Response } from "express";
import mongoose from "mongoose";
import Patient from "../models/Patient";
import PatientInfo from "../types/patientInfo";
import calcultePMS from "./calculatePMS";

// Create and Save a new Patient info
export const create = async (req: Request, res: Response) => {

    const formData: PatientInfo = {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email
    }
    // Calculate Patient Metric Score based off their data input in the form
    const pmScore = calcultePMS(formData);

    const patientData = new Patient({...formData, pmScore: pmScore});

    // Save patient data in the database
    try{
        const savedPatientData = await patientData.save()
        res.send(savedPatientData);
    }catch (err) {
        if (err instanceof mongoose.Error) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.status(500).send("Some error occurred while saving patient info.");
        }
    }

}
