import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Price: React.FC = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const savedData = localStorage.getItem("step2");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setQuantity(parsedData.quantity);
    } else {
      navigate("/step2");
    }
  }, [navigate]);

  useEffect(() => {
    if (quantity > 0) {
      if (quantity <= 10) setPrice(10);
      else if (quantity <= 100) setPrice(100);
      else setPrice(1000);
    }
  }, [quantity]);

  const handleBack = () => navigate("/step2");
  const handleSubmit = () => navigate("/step4");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{
          maxWidth: "770px",
          width: "100%",
          borderRadius: "6px",
          background: "#E5E5E5"
        }}
      >
        {/* Breadcrumb Navigation */}
        <div
          className="breadcrumb-container d-flex justify-content-between align-items-center"
          style={{
            background: "#FFFFFF",
            borderRadius: "6px",
            padding: "8px 16px",
            marginBottom: "16px",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span
            className="breadcrumb-item"
            style={{
              color: "#ccc",
            }}
          >
            Contact Info
          </span>
          <span
            className="breadcrumb-item"
            style={{
              color: "#ccc",
            }}
          >
            Quantity
          </span>
          <span
            className="breadcrumb-item"
            style={{
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Price
          </span>
          <span
            className="breadcrumb-item"
            style={{
              color: "#ccc",
            }}
          >
            Done
          </span>
        </div>

        <h2 className="text-center mb-4">Price</h2>
        <p>
          Based on your quantity (<strong>{quantity}</strong>), the price is:{" "}
          <strong>${price}</strong>.
        </p>
        <div className="d-flex justify-content-between">
          <button type="button" onClick={handleBack} className="btn btn-secondary">
            Back
          </button>
          <button type="button" onClick={handleSubmit} className="btn btn-primary">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
