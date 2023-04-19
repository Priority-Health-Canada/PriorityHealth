import mongoose, { Schema, Document } from "mongoose";
import MspInfo from "../types/mspInfo";

const MspSchema: Schema = new Schema<MspInfo>({
  phn: { type: String, required: true, unique: true },
  msp: { type: String, required: true, unique: true },
  icd: { type: String, required: true },
  status: { type: String, required: true },
});

// Export the model for the schema. The Parameter type represents a document in the database
export default mongoose.model<MspInfo & Document>("MSPData", MspSchema);
