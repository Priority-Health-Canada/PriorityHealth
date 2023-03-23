import fs from "fs/promises";

interface Data {
  name: string;
  dob: any;
  gender: string;
  email: string;
}

export async function saveData(data: Data): Promise<void> {
  try {
    // Read the contents of the patients.json file
    const dataFromFile = await fs.readFile("patients.json", "utf8");

    // Parse the contents of the file as JSON
    let patientData: Data[] = JSON.parse(dataFromFile);

    // Add the new patient data to the parsed array
    patientData.push(data);

    // Convert the patient data back to a formatted JSON string
    const jsonStr = JSON.stringify(patientData, null, 2);

    // Write the updated patient data back to the file
    await fs.writeFile("patients.json", jsonStr);
  } catch (error: any) {
    // If the file does not exist, create a new file with the new patient data
    if (error.code === "ENOENT") {
      const jsonStr = JSON.stringify([data], null, 2);
      await fs.writeFile("patients.json", jsonStr);
    } else {
      // If there was any other error, re-throw it to be caught elsewhere
      throw error;
    }
  }
}
