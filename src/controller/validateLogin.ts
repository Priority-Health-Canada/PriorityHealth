import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import LoginInfo from "../types/loginInfo";
import { ResponseProperties, TypedRequest, TypedResponse } from "../types/request&response";

const JWT_SECRET: string = process.env.JWT_SECRET || "default-secret";

export const validate = async (req: TypedRequest<LoginInfo>, res: TypedResponse<ResponseProperties>): Promise<TypedResponse<ResponseProperties>> => {

  const adminData: LoginInfo = {
    username: req.body.username,
    password: req.body.password,
    accountType: req.body.accountType
  };
  console.log(adminData);

  if (!adminData.username || !adminData.password) {
    // Return 400 Bad Request if either field is missing
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    // Find user with matching username and password
    const adminUser = await Admin.findOne({
      username: adminData.username,
      password: adminData.password,
    });

    if (!adminUser) {
      // Return 401 Unauthorized if username and password don't match
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token: string = jwt.sign({ adminId: adminUser._id }, JWT_SECRET, {
      expiresIn: "30s",
    });

    // Return 200 OK if username and password match
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    // Handle errors
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
