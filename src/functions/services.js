import { toast } from "react-toastify";
import { API_URI } from "../Constant";
import Axios from "./Axios";

export const handleApiRequest = async (
  route,
  formData,
  handleSuccess,
  method
) => {
  if (method === "get") {
    await Axios.get(`${API_URI}${route}`, formData)
      .then((response) => {
        // Handle success
        handleSuccess(response.data);
        console.log("Signup successful:", response.data);
      })
      .catch((error) => {
        // Handle error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Server responded with an error:", error.response.data);
          toast.error(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received from the server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error setting up the request:", error.message);
          toast.error(error.message);
        }

        // Return the error for handling in the component
        return error;
      });
  } else {
    await Axios.post(`${API_URI}${route}`, formData)
      .then((response) => {
        // Handle success
        console.log("Signup successful:", response.data);
        toast.success(response.data.message);
        handleSuccess(response.data);
      })
      .catch((error) => {
        // Handle error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Server responded with an error:", error.response.data);
          toast.error(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received from the server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error setting up the request:", error?.message);
          toast.error(error?.message);
        }

        // Return the error for handling in the component
        return error;
      });
  }
};
