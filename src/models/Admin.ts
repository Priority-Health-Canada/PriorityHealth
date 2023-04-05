import mongoose, { Schema, Document } from "mongoose";
import AdminInfo from "../types/adminInfo";

const AdminSchema: Schema = new Schema<AdminInfo>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<AdminInfo & Document>("AdminData", AdminSchema);
