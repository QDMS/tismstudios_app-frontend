import axios from "axios";
import { server } from "../store";

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePasswordRequest",
      });

      const { data } = await axios.put(
        `${server}/user/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const updateProfile =
  (name, email, phone, address, city, usState, zipCode) => async (dispatch) => {
    try {
      dispatch({
        type: "updateProfileRequest",
      });

      const { data } = await axios.put(
        `${server}/user/updateprofile`,
        {
          name, email, phone, address, city, usState, zipCode
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateProfileSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProfileFail",
        payload: error.response.data.message,
      });
    }
  };

  export const updatePic = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePicRequest",
      });
  
      const { data } = await axios.put(`${server}/user/updatepic`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
  
      dispatch({
        type: "updatePicSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePicFail",
        payload: error.response.data.message,
      });
    }
  };