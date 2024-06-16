import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { refreshToken } from "~/controllers";
// import { getLoginSuccess, resetLogin } from "~/redux/authSlice";

const axiosInstance = axios.create({
  baseURL: "localhost:5000", //Link server,
  // headers: { authorization: user?.accessToken },
});

axios.defaults.withCredentials = true;
axiosInstance.defaults.withCredentials = true;

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   async function (config) {
//     if (user !== null) {
//       let date = new Date();
//       const accessToken = user?.accessToken.split(" ")[1];
//       const decodedToken = jwtDecode(accessToken);
//       if (decodedToken.exp < date.getTime() / 1000) {
//         const res = await refreshToken(axios);
//         if (!res || res?.err === 1) dispatch(resetLogin());
//         else {
//           const refreshUser = {
//             ...user,
//             accessToken: res?.data?.accessToken,
//           };
//           dispatch(getLoginSuccess(refreshUser));
//           config.headers["authorization"] = `${refreshUser?.accessToken}`;
//         }
//       }
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
axiosInstance.interceptors.response.use(
  async function (response) {
    return response.data;
  },
  async function (error) {
    // dispatch(resetLogin());
    return Promise.reject(error);
  }
);

export default axiosInstance;
