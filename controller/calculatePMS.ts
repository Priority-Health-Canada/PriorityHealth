import PatientData from "../types/patientInfo";

export default function calcultePMS(patientData: PatientData): number {
    
    let pmsScore = 0;
    
    if(patientData.gender === "male"){
        pmsScore += 2;
    }else if(patientData.gender === "female"){
        pmsScore += 5;
    }else{
        pmsScore += 100;
    }
    return pmsScore;
}