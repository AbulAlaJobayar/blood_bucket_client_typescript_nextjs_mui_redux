
import { authKey } from "@/constant/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import { getNewAccessToken } from "@/services/authService";
import { setAccessToken } from "@/services/action/setAccessToken";
import { IGenericErrorResponse, TResponseSuccessType } from "@/types";


 const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
  const accessToken = getFromLocalStorage(authKey);
console.log({accessToken})
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
         //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // const responseObject: TResponseSuccessType = {
    //     data: response?.data?.data,
    //     meta: response?.data?.meta,
    //   };
      // return responseObject;
      return response
  
  },
 async function (error) {
        const config = error.config;
        if (error?.response?.status === 500 && !config.sent) {
          config.sent=true
          const response = await getNewAccessToken();
          const accessToken = response.data.token;
          config.headers["Authorization"] = accessToken;
          setToLocalStorage(authKey, accessToken);
          setAccessToken(accessToken)
          return instance(config);
        } else {
          const responseObject: IGenericErrorResponse = {
            statusCode: error?.response?.data?.statusCode || 500,
            message: error?.response?.data?.message || "Something went wrong!!!",
            errorMessage: error?.response?.data?.message,
          };
          // return Promise.reject(error);
          return responseObject;
  }}
);
export { instance };