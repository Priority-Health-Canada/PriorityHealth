import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import MedicalStaff from "../models/MedicalStaff";
import LoginInfo from "../types/loginInfo";
import { ResponseProperties, TypedRequest, TypedResponse } from "../types/request&response";

const JWT_SECRET: string = process.env.JWT_SECRET || "default-secret";
const ADMIN_USERNAME: string = process.env.ADMIN_USERNAME || "";

export const validate = async (req: TypedRequest<LoginInfo>, res: TypedResponse<ResponseProperties>): Promise<TypedResponse<ResponseProperties>> => {

  const loginData: LoginInfo = {
    username: req.body.username,
    password: req.body.password,
    accountType: req.body.accountType
  };
  // console.log(loginData);

  if (!loginData.username || !loginData.password) {
    // Return 400 Bad Request if either field is missing
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  var Collection;
  loginData.accountType === 'admin' ? (Collection = Admin) : (Collection = MedicalStaff)

  try {
    // Find user with matching username and password
    // Depending on the account type chosen, variable Collection could be either Admin or MedicalStaff model
    // Admin and medical staff accounts are considered as super users
    const superUser = await Collection.findOne({
      username: loginData.username,
      password: loginData.password,
    });

    if (!superUser) {
      // Return 401 Unauthorized if username and password don't match
      return res.status(401).json({ message: "Invalid username or password" });
    }
    let token: string;
    
    if(superUser.username === ADMIN_USERNAME){
      token = jwt.sign({ userId: superUser._id, accountType: "admin" }, JWT_SECRET, {
        expiresIn: "30s",
      });
    }else{
      token = jwt.sign({ userId: superUser._id, accountType: "medicalStaff" }, JWT_SECRET, {
        expiresIn: "30s",
      });
    }
    

    // Return 200 OK if username and password match
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    // Handle errors
    // console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
