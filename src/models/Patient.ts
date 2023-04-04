import mongoose, { Schema, Document } from 'mongoose';
import PatientInfo from '../types/patientInfo';

const PatientSchema: Schema = new Schema<PatientInfo>({
  phn: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  indigenous: { type: String, required: true },
  mhq1: { type: String, required: true },
  mhq2: { type: String, required: true },
  mhq3: { type: String, required: true },
  mhq4: { type: String, required: true },
  mhq5: { type: String, required: true },
  mhq6: { type: String, required: true },
  adl1: { type: String, required: true },
  adl2: { type: String, required: true },
  adl3: { type: String, required: true },
  adl4: { type: String, required: true },
  pmScore: Number
});

// Export the model for the schema. The Parameter type represents a document in the database
export default mongoose.model<PatientInfo & Document>('PatientData', PatientSchema);