const getToken = (): string => {
  const split = document.cookie.split("; ");
  for (const str of split) {
    if (str.indexOf("token=") > -1) return str.substr(6);
  }
  return "";
};

export const requestInit = (
  method: string,
  body?: any,
  token?: boolean
): RequestInit => ({
  method: method,
  headers: {
    ...{ "Content-Type": "application/json" },
    ...(token ? { token: getToken() } : {}),
  },
  ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
});
