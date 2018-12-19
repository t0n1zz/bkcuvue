import { setAuthorization } from "./general";

export function login(credentials){
  return new Promise((res,rej) => {
    axios.post('/api/auth/login', credentials)
      .then((response) => {
        setAuthorization(response.data.access_token);
        res(response.data);
      })
      .catch((err) => {
        rej("Username atau password salah");
      })
  })
}

export function refreshToken(){
  return new Promise((res,rej) => {
    axios.post('/api/auth/refresh')
      .then((response) => {
        setAuthorization(response.data.access_token);
        res(response.data);
      })
      .catch((err) => {
        rej("Username atau password salah");
      })
  })
}

export function getLocalUser(){
  const userStr = localStorage.getItem('user');

  if(!userStr){
    return null;
  }

  return JSON.parse(userStr);
}