import React, { useState } from "react";
import axios from "axios";
import "./Addabout.css";
import { Link } from "react-router-dom";


function Addabout() {
    const [formData, setFormData] = useState({
        summaryparaone: "",
        summaryparatwo:"",
        techLanguages: "",
        profilePhoto: null,
        cv: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("summaryparaone", formData.summaryparaone);
        data.append("summaryparatwo", formData.summaryparatwo);

        data.append("techLanguages", formData.techLanguages);
        data.append("profilePhoto", formData.profilePhoto);
        data.append("cv", formData.cv);

        try {
            const res = await axios.post(
  "http://localhost:3800/addabout",
  data,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);
            alert("About section added successfully!");
            console.log(res.data);
        } catch (err) {
            console.error(err);
            alert("Error uploading data");
        }
    };

    return (

        <>
            <div className="add-about-container">

            {/* TOPBAR */}
            <div className="top-bar">
                <Link to="/adminpanel" className="back-btn">← Back to Panel</Link>
            </div>


                <h2>Add About</h2>

                <form onSubmit={handleSubmit} className="about-form">

                    {/* SUMMARY */}

                    <textarea
                        name="summaryparaone"
                        placeholder="Write your about summary Firt Paragraph..."
                        value={formData.summaryparaone}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="summaryparatwo"
                        placeholder="Write your about summary Second Paragraph..."
                        value={formData.summaryparatwo}
                        onChange={handleChange}
                        required
                    />



                    {/* TECH LANGUAGES */}
                    <input
                        type="text"
                        name="techLanguages"
                        placeholder="Tech Languages (e.g. React, Node, MongoDB)"
                        value={formData.techLanguages}
                        onChange={handleChange}
                    />

                    {/* PROFILE PHOTO */}
                    <label>Profile Photo</label>
                    <input
                        type="file"
                        name="profilePhoto"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                        required
                    />

                    {/* CV PDF */}
                    <label>Upload CV (PDF)</label>
                    <input
                        type="file"
                        name="cv"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Addabout;