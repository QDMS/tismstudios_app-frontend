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
          name,
          email,
          phone,
          address,
          city,
          usState,
          zipCode,
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

export const placeOrder =
  (
    orderItems,
    shippingInfo,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    paymentInfo
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "placeOrderRequest",
      });

      const { data } = await axios.post(
        `${server}/order/new`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          paymentInfo,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch({
        type: "placeOrderSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "placeOrderFail",
        payload: error.response.data.message,
      });
    }
  };

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "processOrderRequest",
    });

    const { data } = await axios.put(
      `${server}/order/single/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "processOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "processOrderFail",
      payload: error.response.data.message,
    });
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: "addCategoryRequest",
    });

    const { data } = await axios.post(
      `${server}/service/category`,
      {
        category,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({
      type: "addCategorySuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addCategoryFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteCategoryRequest",
    });

    const { data } = await axios.delete(
      `${server}/service/category/${id}`,

      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteCategorySuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteCategoryFail",
      payload: error.response.data.message,
    });
  }
};

export const createService = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "addServiceRequest",
    });

    const { data } = await axios.post(`${server}/service/new`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({
      type: "addServiceSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addServiceFail",
      payload: error.response.data.message,
    });
  }
};

export const updateService =
  (id, name, description, price, stock, etoc, category) => async (dispatch) => {
    try {
      dispatch({
        type: "updateServiceRequest",
      });

      const { data } = await axios.put(
        `${server}/service/single/${id}`,
        {
          name,
          description,
          price,
          stock,
          etoc,
          category,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateServiceSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateServiceFail",
        payload: error.response.data.message,
      });
    }
  };

export const updateServiceImage = (serviceId, formData) => async (dispatch) => {
  try {
    dispatch({
      type: "updateServiceImageRequest",
    });

    const { data } = await axios.post(
      `${server}/service/images/${serviceId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "updateServiceImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateServiceImageFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteServiceImage = (serviceId, imageId) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteServiceImageRequest",
    });

    const { data } = await axios.delete(
      `${server}/service/images/${serviceId}?id=${imageId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteServiceImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteServiceImageFail",
      payload: error.response.data.message,
    });
  }
};
