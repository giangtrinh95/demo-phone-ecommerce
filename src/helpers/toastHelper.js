import { toast } from "react-toastify";

export const toastError = (error) => {
  let message = null;
  if (error) {
    message = error;
  }
  toast.error(message);
};
export const toastSuccess = (message) => {
  toast.success(message);
};
