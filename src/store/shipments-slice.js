import { createSlice } from "@reduxjs/toolkit";

const shipmentsSlice = createSlice({
  name: "shipments",
  initialState: { shipments: [], loading: false },
  reducers: {
    setShipments: (state, action) => {
      state.shipments = action.payload;
    },
    updateShipment(state, action) {
      const updatedShipment = action.payload;
      const shipmentIndex = state.shipments.findIndex(
        (shipment) => shipment.orderNo === updatedShipment.orderNo
      );
      state.shipments[shipmentIndex] = updatedShipment;
    },
    deleteShipment(state, action) {
      state.shipments = state.shipments.filter((shipment) => shipment.orderNo !== action.payload);
    },
  },
});

export const { setShipments, updateShipment, deleteShipment } = shipmentsSlice.actions;

export default shipmentsSlice.reducer;
