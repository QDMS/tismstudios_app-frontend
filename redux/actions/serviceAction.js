import axios from "axios";
import { server } from "../store";

export const getAllServices = (keyword, category) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllServicesRequest",
    });
    const { data } = await axios.get(`${server}/service/all?keyword=${keyword}&category=${category}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllServicesSuccess",
      payload: data.services,
    });
  } catch (error) {
    dispatch({
      type: "getAllServicesFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminServices = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminServicesRequest",
    });
    const { data } = await axios.get(`${server}/service/admin`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAdminServicesSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAdminServicesFail",
      payload: error.response.data.message,
    });
  }
};

export const getServiceDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getServiceDetailsRequest",
    });
    const { data } = await axios.get(`${server}/service/single/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getServiceDetailsSuccess",
      payload: data.service,
    });
  } catch (error) {
    dispatch({
      type: "getServiceDetailsFail",
      payload: error.response.data.message,
    });
  }
};
