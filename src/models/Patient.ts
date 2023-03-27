import mongoose, { Schema, Document } from 'mongoose';
import PatientInfo from '../types/patientInfo';

const PatientSchema: Schema = new Schema<PatientInfo>({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  pmScore: Number
});

// Export the model for the schema. The Parameter type represents a document in the database
export default mongoose.model<PatientInfo & Document>('PatientData', PatientSchema);