import mongoose, { Schema, Document } from "mongoose";
import PatientInfo from "../types/patientInfo";

const PatientSchema: Schema = new Schema<PatientInfo>({
  phn: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  indigenous: { type: String, required: true },
  pain: { type: String, required: true },
  socialSupport: { type: String, required: true },
  familyIllness: { type: String, required: true },
  prescriptionMed: { type: String, required: true },
  mentalHealth: { type: String, required: true },
  otherDrugUse: { type: String, required: true },
  movingAbility: { type: String, required: true },
  feedingAbility: { type: String, required: true },
  takeCareAbility: { type: String, required: true },
  controlBladderFunction: { type: String, required: true },
  pmScore: Number,
});

// Export the model for the schema. The Parameter type represents a document in the database
export default mongoose.model<PatientInfo & Document>(
  "PatientData",
  PatientSchema
);
