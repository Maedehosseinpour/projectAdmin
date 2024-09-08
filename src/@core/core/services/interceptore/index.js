import axios from "axios";
import { json } from "react-router-dom";
import { getItem } from "../../../../../src/localStorage/localStorage";
import toast from "react-hot-toast";




// const baseURL = 'https://classapi.sepehracademy.ir/api'
const baseURL = import.meta.env.VITE_BASE_URL


const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use(opt => {

      opt.headers['MessageTest'] = "Hello World"; 
      const token = getItem("token") ? getItem("token") : null;
      if (token) opt.headers.Authorization = 'Bearer ' + token;

    return opt
})



const onSuccess = (response) => {
    return response.data
}

const onError = (err) => {
    // console.log(err);

     if(err.response.status === 401){
  
       removeItem('token');
       window.location.pathname = '/' // or '/login'
     }

    if(err.response.status >= 400 && err.response.status < 500){
toast.error(err.response.data.ErrorMessage[0])    }

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);



export default instance;