export default interface PatientInfo {
  name: string;
  dob: Date;
  gender: string;
  email: string;
  phn: number;
  mhq1: string;
  mhq2: string;
  mhq3: string;
  mhq4: string;
  mhq5: string;
  mhq6: string;
  adl1: string;
  adl2: string;
  adl3: string;
  adl4: string;
  pmScore?: number;
}
