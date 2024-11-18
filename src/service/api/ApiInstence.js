import axios from "axios";
import { store } from '../../Redux/store';
import { clearAccessToken } from "../../Redux/feathers/auth";

export const apiInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

/*
 * 1. REQUEST INTERCEPTOR
 */
apiInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const { role, accessToken } = state.auth;

    // Dynamically set baseURL based on the role
    config.baseURL = role 
  ? `${import.meta.env.VITE_API_URL}/${role === 'admin' ? 'adminapp' : role}`
  : import.meta.env.VITE_API_URL;


    // Set Authorization header if accessToken is available
    if (accessToken) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxOTIyOTI0LCJpYXQiOjE3MzE5MjExMjQsImp0aSI6IjQxZjU1NmUyMGFjMzQzZTJiNmY3YWZkZTYxY2M3ZmRkIiwidXNlcl9pZCI6NX0.E5go1GSe6X3nDdLeW_JtJ2TsErcQKNjOq-81ecRMtQ8`;
    }

    return config;
  },
  (error) => {
    // logError(error, store);
    return Promise.reject(error);
  }
);

/*
 * 2. RESPONSE INTERCEPTOR
 */
function attachResponseInterceptor() {
  
  const responseInterceptor = apiInstance.interceptors.response.use(
    (response) => {
      return response; 
    },
    async (error) => {
      const config = error?.config;
      const responseError = error?.response;
      console.log(responseError?.status, responseError?.headers);
      
      if (
        responseError?.status === 401 &&
      responseError?.data?.code === "token_not_valid" &&
      responseError?.data?.messages?.some(
        (msg) => msg.token_class === "AccessToken"
      )
    ) {
        apiInstance.interceptors.response.eject(responseInterceptor);
        console.log('hai');
        store?.dispatch(clearAccessToken());

        
        try {
          const MAX_RETRIES = 2;
          console.log(MAX_RETRIES);
          
          config._retries = Math.abs(config._retries) || 0;
          if (config._retries >= MAX_RETRIES) {
            throw new Error(`Max retries (${config._retries}) reached!`);
          }

          // const data = await refreshAccessToken();
          // console.log(data);
          
          // const accessToken = data.accessToken
          // config.headers.Authorization = `Bearer ${data.accessToken}`;
          // store.dispatch(  (accessToken));

          config._retries++;
          attachResponseInterceptor();
          return apiInstance(config);
        } catch (reauthError) {
          console.log("Re-authentication error: ", reauthError);
        } finally {
          attachResponseInterceptor(); 
        }
      }
      store?.dispatch(clearAccessToken());
      //  logError(error, store); 
      return Promise.reject(error);
    }
  );
}

attachResponseInterceptor();
