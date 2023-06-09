import mongoose, { Schema, Document } from "mongoose";
import LoginInfo from "../types/loginInfo";

const AdminSchema: Schema = new Schema<LoginInfo>({
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

export default mongoose.model<LoginInfo & Document>("AdminData", AdminSchema);
