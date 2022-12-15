import sendRequest from "./send-request";
// in charge of sending out ajax requests to server
const BASE_URL = "api/users";

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export async function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
