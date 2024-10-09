export function authTokenExpired(authToken: string) {
  if (!authToken) return true;
  const decodedToken = decodeAuthToken(authToken);
  const nowSeconds = Math.floor(Date.now() / 1000);
  return decodedToken.exp < nowSeconds;
}

export function decodeAuthToken(authToken: string) {
  const payload = authToken.split(".")[1];
  const decodedPayload = atob(payload);
  const { exp } = JSON.parse(decodedPayload);
  return { exp };
}
