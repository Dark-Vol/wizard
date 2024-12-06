import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Quantity: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      quantity: "",
    },
    validationSchema: Yup.object({
      quantity: Yup.number()
        .min(1, "Minimum is 1")
        .max(1000, "Maximum is 1000")
        .required("Quantity is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("step2", JSON.stringify(values));
      navigate("/step3");
    },
  });

  const handleBack = () => navigate("/step1");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={formik.handleSubmit}
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
              fontWeight: "bold",
              color: "#000",
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
              color: "#ccc",
            }}
          >
            Done
          </span>
        </div>

        <h2 className="text-center mb-4">Quantity</h2>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            className={`form-control ${
              formik.touched.quantity && formik.errors.quantity ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            value={formik.values.quantity}
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <div className="invalid-feedback">{formik.errors.quantity}</div>
          )}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" onClick={handleBack} className="btn btn-secondary">
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Quantity;
