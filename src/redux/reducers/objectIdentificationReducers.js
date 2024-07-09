import {
  IDENTIFY_OBJECT_FAIL,
  IDENTIFY_OBJECT_REQUEST,
  IDENTIFY_OBJECT_SUCCESS,
} from "../constants/constants";

export const identifyObjectReducer = (
  state = { item: null, loading: true },
  action
) => {
  switch (action.type) {
    case IDENTIFY_OBJECT_REQUEST:
      return { loading: true };
    case IDENTIFY_OBJECT_SUCCESS:
      return { loading: false, item: action.payload };
    case IDENTIFY_OBJECT_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
