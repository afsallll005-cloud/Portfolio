import React, { useEffect, useState } from "react";
import "./Addproject.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function AddProject() {

    const formik = useFormik({
        initialValues: {
            ProjectName: "",
            Description: "",
            Category: "",
            Languages: "",
            Githublink: "",
            Demolink: "",
            Image: null,
            MoreImage: []
        },

        onSubmit: async (values) => {
            try {
                const formData = new FormData();

                formData.append("ProjectName", values.ProjectName);
                formData.append("Description", values.Description);
                formData.append("Category", values.Category);
                formData.append("Languages", values.Languages);

                formData.append("Githublink", values.Githublink);
                formData.append("Demolink", values.Demolink);

                formData.append("Image", values.Image);

                values.MoreImage.forEach((file) => {
                    formData.append("MoreImage", file);
                });

                await axios.post(`${import.meta.env.VITE_API_URL}/addProject`, formData);

                alert("Project added successfully");
                formik.resetForm();

            } catch (err) {
                console.log(err);
            }
        }
    });

    return (
        <div className="dashh">

            <div className="mainnn">

                {/* TOPBAR */}
                <div className="top-bar">
                    <Link to="/adminpanel" className="back-btn">← Back to Panel</Link>
                </div>


                <h1 id="h1">Add Project</h1>

                <form onSubmit={formik.handleSubmit}>



                    <input
                        type="text"
                        name="ProjectName"
                        placeholder="Project Name"
                        onChange={formik.handleChange}
                    />

                    <input
                        type="text"
                        name="Category"
                        placeholder="Category"
                        onChange={formik.handleChange}
                    />



                    {/* SINGLE IMAGE */}
                    <input
                        type="file"
                        onChange={(e) =>
                            formik.setFieldValue("Image", e.currentTarget.files[0])
                        }
                    />

                    {/* MULTIPLE IMAGES */}
                    <input
                        type="file"
                        name="MoreImage"   // ✅ ADD THIS
                        multiple
                        onChange={(e) =>
                            formik.setFieldValue(
                                "MoreImage",
                                Array.from(e.currentTarget.files)
                            )
                        }
                    />

                    <textarea
                        name="Description"
                        placeholder="Description"
                        onChange={formik.handleChange}
                    />


                    <input
                        type="text"
                        name="Languages"
                        placeholder="Tech"
                        onChange={formik.handleChange}
                    />
                    <div className="gihubLinks">

                        <input
                            type="text"
                            name="Githublink"
                            placeholder="Github Link"
                            onChange={formik.handleChange}
                        />

                        <input
                            type="text"
                            name="Demolink"
                            placeholder="Demo Link"
                            onChange={formik.handleChange}
                        />


                    </div>

                    <button className="buttonnn"
                        type="submit">Add Project</button>
                </form>
            </div>
        </div>
    );
}

export default AddProject;