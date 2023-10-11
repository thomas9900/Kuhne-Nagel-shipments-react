/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchShipments } from "../../store/shipments-actions";
import { deleteShipment } from "../../store/shipments-slice";
import { uiActions } from "../../store/ui-slice";
import ShipmentDetailsModal from "../ShipmentDetails/ShipmentDetailsModal";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import "./ShipmentsTable.css";

function ShipmentsTable() {
  const shipments = useSelector((state) => state.shipments.shipments);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setLoading(true));
    dispatch(fetchShipments());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState(null);

  const openModal = (shipment) => {
    setSelectedShipment(shipment);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedShipment(null);
    setShowModal(false);
  };

  const handleDelete = (shipmentId) => {
    dispatch(deleteShipment(shipmentId));
  };

  if (loading) {
    return <h2 className="loading-header">Loading...</h2>;
  }

  const columns = [
    { Header: "Order No", accessor: "orderNo" },
    { Header: "Date", accessor: "date" },
    { Header: "Customer", accessor: "customer" },
    { Header: "Tracking No", accessor: "trackingNo" },
    { Header: "Status", accessor: "status" },
    { Header: "Consignee", accessor: "consignee" },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => (
        <div>
          <MDButton variant="gradient" color="info" onClick={() => openModal(row.original)}>
            Details
          </MDButton>
          <MDButton
            variant="gradient"
            color="error"
            className="delete-button"
            onClick={() => handleDelete(row.original.orderNo)}
          >
            Delete
          </MDButton>
        </div>
      ),
    },
  ];

  return (
    <>
      <h2 className="shipments-header">Shipments</h2>
      <DataTable
        table={{
          columns: columns,
          rows: shipments,
        }}
      />
      {showModal && selectedShipment && (
        <ShipmentDetailsModal selectedShipment={selectedShipment} closeModal={closeModal} />
      )}
    </>
  );
}

export default ShipmentsTable;
