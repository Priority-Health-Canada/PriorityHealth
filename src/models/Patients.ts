import mongoose, { Schema, Document } from 'mongoose';
import PatientInfo from '../types/patientInfo';

export interface Patient extends PatientInfo, Document {}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  pmScore: { type: Number, required: true }
});

// Export the model and return your IUser interface
export default mongoose.model<Patient>('Patient', UserSchema);