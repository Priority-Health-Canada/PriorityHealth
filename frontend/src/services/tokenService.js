export default function removeExpiredToken(decodedToken) {
  if (decodedToken.exp < Date.now() / 1000) {
    // if token has expired, remove it from localStorage
    localStorage.removeItem("token");
    return true;
  }
  return false;
}
