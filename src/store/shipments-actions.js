import axios from "axios";
import { setShipments } from "./shipments-slice";
import { uiActions } from "./ui-slice";
import localShipmentsData from "../shipments.json";

export const fetchShipments = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0");
      dispatch(setShipments(response.data));
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      console.error("Error fetching shipments from API:", error);
      // If the API request fails, use the local shipments data as a fallback
      dispatch(setShipments(localShipmentsData));
      dispatch(uiActions.setLoading(false));
    }
  };
};
