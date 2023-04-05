import mongoose from "mongoose";
import Patient from "../models/Patient";
import PatientInfo from "../types/patientInfo";
import { ResponseProperties, TypedRequest, TypedResponse } from "../types/request&response";
import PMScore from "./PMScore";

// Create and Save a new Patient info
export const create = async (req: TypedRequest<PatientInfo>, res: TypedResponse<ResponseProperties>): Promise<void> => {
  
  //Get form data from FE
  const formData: PatientInfo = {
    phn: req.body.phn,
    name: req.body.name,
    dob: req.body.dob,
    gender: req.body.gender,
    email: req.body.email,
    indigenous: req.body.indigenous,
    mhq1: req.body.mhq1,
    mhq2: req.body.mhq2,
    mhq3: req.body.mhq3,
    mhq4: req.body.mhq4,
    mhq5: req.body.mhq5,
    mhq6: req.body.mhq6,
    adl1: req.body.adl1,
    adl2: req.body.adl2,
    adl3: req.body.adl3,
    adl4: req.body.adl4,
  };

  // Calculate Patient Metric Score based off their data input in the form
  const pmScore: number = PMScore.calcultePMS(formData);

  const patientData = new Patient({ ...formData, pmScore: pmScore });

  // Save patient data in the database
  try {
    const savedPatientData = await patientData.save();
    res.send(savedPatientData);
  } catch (err) {
    if (err instanceof mongoose.Error) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(500).json({message: "Some error occurred while saving patient info."});
    }
  }
};
