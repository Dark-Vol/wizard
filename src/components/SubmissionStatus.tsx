import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SubmissionStatus: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const API_URL = "http://localhost:4000/api/wizard";

  const sendData = async () => {
    try {
      const step1Data = JSON.parse(localStorage.getItem("step1") || "{}");
      const step2Data = JSON.parse(localStorage.getItem("step2") || "{}");
      const payload = {
        ...step1Data,
        ...step2Data,
      };

      await axios.post(API_URL, payload);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  const handleRestart = () => {
    localStorage.clear();
    navigate("/step1");
  };

  React.useEffect(() => {
    sendData();
  }, []);

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
              color: "#ccc",
            }}
          >
            Price
          </span>
          <span
            className="breadcrumb-item"
            style={{
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Done
          </span>
        </div>

        <h2 className="text-center mb-4">Submission Status</h2>
        {status === "success" && <p className="text-success">Your data has been sent successfully!</p>}
        {status === "error" && (
          <p className="text-danger">There was an error sending your data. Please try again.</p>
        )}
        {status === null && <p>Sending your data...</p>}
        <button type="button" onClick={handleRestart} className="btn btn-primary mt-3">
          Start Again
        </button>
      </div>
    </div>
  );
};

export default SubmissionStatus;
