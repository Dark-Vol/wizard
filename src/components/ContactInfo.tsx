import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const ContactInfo: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\+?\d{10,}$/, "Phone must be a valid number")
        .required("Phone is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("step1", JSON.stringify(values));
      navigate("/step2");
    },
  });

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
              fontWeight: "bold",
              color: "#000",
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
              color: "#ccc",
            }}
          >
            Done
          </span>
        </div>

        <h2 className="text-center mb-4">Contact Info</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control ${
              formik.touched.name && formik.errors.name ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="invalid-feedback">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className={`form-control ${
              formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="invalid-feedback">{formik.errors.phone}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Continue
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
