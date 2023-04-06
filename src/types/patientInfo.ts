export default interface PatientInfo {
  phn: string;
  name: string;
  dob: Date;
  gender: string;
  email: string;
  indigenous: string;
  pain: string;
  socialSupport: string;
  familyIllness: string;
  prescriptionMed: string;
  mentalHealth: string;
  otherDrugUse: string;
  movingAbility: string;
  feedingAbility: string;
  takeCareAbility: string;
  controlBladderFunction: string;
  pmScore?: number;
}
