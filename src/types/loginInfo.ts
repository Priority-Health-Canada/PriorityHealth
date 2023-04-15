export default interface LoginInfo {
  username: string;
  password: string;
  accountType?: 'admin' | 'medicalStaff';
}
