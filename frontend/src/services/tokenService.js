import jwt_decode from "jwt-decode";

export default function removeExpiredToken() {
  const token = localStorage.getItem("token");
  if (!token) return; // if token is missing, exit function
  const decodedToken = jwt_decode(token);
  if (decodedToken.exp < Date.now() / 1000) {
    // if token has expired, remove it from localStorage
    localStorage.removeItem("token");
  }
}
