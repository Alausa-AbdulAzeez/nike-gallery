import axios from "axios";
import {
  IDENTIFY_OBJECT_FAIL,
  IDENTIFY_OBJECT_REQUEST,
  IDENTIFY_OBJECT_SUCCESS,
} from "../constants/constants";
import { BASE_URL, extractFirstErrorMessage } from "../../utils/utils";

export const identifyObject = (image) => async (dispatch) => {
  try {
    dispatch({ type: IDENTIFY_OBJECT_REQUEST });

    // Setup request headers with authentication token
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    // console.log(image);
    const res = await axios.post(`${BASE_URL}/api/detect`, image, config);
    console.log(res);

    dispatch({ type: IDENTIFY_OBJECT_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    console.log(error);
    dispatch({
      type: IDENTIFY_OBJECT_FAIL,
      payload:
        error.response && error.response.data
          ? extractFirstErrorMessage(error.response.data)
          : error.message,
    });
  }
};
