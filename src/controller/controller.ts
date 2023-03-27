import fs from "fs/promises";
import PatientData from "../types/patientInfo";
// import calcultePMS from "./calculatePMS";

export async function saveData(data: PatientData): Promise<void> {
  try {
    console.log("Trying: ")

    // Read the contents of the patients.json file
    const dataFromFile = await fs.readFile("patients.json", "utf8");

    // Parse the contents of the file as JSON
    let patientData: PatientData[] = JSON.parse(dataFromFile);

    // Add the new patient data to the parsed array
    patientData.push(data);

    // Convert the patient data back to a formatted JSON string
    const jsonStr = JSON.stringify(patientData, null, 2);

    // Write the updated patient data back to the file
    await fs.writeFile("patients.json", jsonStr);
  } catch (error: any) {
    // If the file does not exist, create a new file with the new patient data
    if (error.code === "ENOENT") {
      console.log("Catch error ENOENT", error);
      const jsonStr = JSON.stringify([data], null, 2);
      await fs.writeFile("patients.json", jsonStr);
    } else {
      console.log("Else Catch error", error);
      // If there was any other error, re-throw it to be caught elsewhere
      throw error;
    }
  }
}
