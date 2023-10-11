/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateShipment } from "../../store/shipments-slice";
import "./ShipmentDetailsModal.css";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

const ShipmentDetailsModal = ({ selectedShipment, closeModal }) => {
  const [editedShipment, setEditedShipment] = useState({ ...selectedShipment });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedShipment((prevShipment) => ({
      ...prevShipment,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    dispatch(updateShipment(editedShipment));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MDButton
            variant="gradient"
            color="error"
            size="small"
            onClick={closeModal}
            style={{ marginLeft: "auto" }}
          >
            <Icon>closeModal</Icon>
          </MDButton>
        </div>
        <h2>Shipment Details</h2>
        <div>
          <label>Order No: </label>
          <input type="text" name="orderNo" value={editedShipment.orderNo} disabled />
        </div>
        <div>
          <label>Date: </label>
          <input type="text" name="date" value={editedShipment.date} onChange={handleInputChange} />
        </div>
        <div>
          <label>Customer: </label>
          <input
            type="text"
            name="customer"
            value={editedShipment.customer}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tracking No: </label>
          <input
            type="text"
            name="trackingNo"
            value={editedShipment.trackingNo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Status: </label>
          <input
            type="text"
            name="status"
            value={editedShipment.status}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Consignee: </label>
          <input
            type="text"
            name="consignee"
            value={editedShipment.consignee}
            onChange={handleInputChange}
          />
        </div>
        <MDButton variant="gradient" color="info" onClick={handleSaveChanges}>
          Save changes
        </MDButton>
      </div>
    </div>
  );
};

export default ShipmentDetailsModal;
