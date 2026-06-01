import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Addservices.css";

function AddService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Service: "",
    ServiceDiscription: "",
    Amount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/addService`,
        formData
      );

      alert(res.data.message);

      setFormData({
        Service: "",
        ServiceDiscription: "",
        Amount: "",
      });

    } catch (error) {
      console.error(error);
      alert("Error adding service");
    }
  };

  return (
    <div className="service-container">
      <div className="form-box">
        <h2>Add Service</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Service"
            placeholder="Service Name"
            value={formData.Service}
            onChange={handleChange}
            required
          />

          <textarea
            name="ServiceDiscription"
            placeholder="Service Description"
            value={formData.ServiceDiscription}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="Amount"
            placeholder="Amount"
            value={formData.Amount}
            onChange={handleChange}
            required
          />

          <div className="buttonn-group">
            <button type="submit" className="submit-btn">
              Add Service
            </button>

             
          </div>
        </form>

       
      </div>
    </div>
  );
}

export default AddService;