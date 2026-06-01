import React, { useEffect, useState } from "react";
import "./Viewproject.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Viewproject() {
    const { id } = useParams();

    const [project, setProject] = useState({
        ProjectName: "",
        Description: "",
        Category: "",
        Languages: "",
        Image: "",
        MoreImage: [],
    });

    /* ================= FETCH ================= */
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/Viewproject/${id}`)
            .then((res) => setProject(res.data.data))
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div className="project">

            <Navbar />

            {/* HERO */}
            <section className="project__hero">
                <h1 className="project__title">
                    {project.ProjectName}
                </h1>

                <div className="project__hero-media">
                    {project.Image && (
                        <img
                            src={project.Image?.startsWith('http') ? project.Image : `${import.meta.env.VITE_API_URL}/images/${project.Image}`}
                            alt="Hero"
                        />
                    )}
                </div>
            </section>

            {/* INFO */}
            <section className="project__meta">
                <div className="project__meta-item">
                    <h4 className="project__meta-title">Project Name</h4>
                    <p className="project__meta-text">{project.ProjectName}</p>
                </div>

                <div className="project__meta-item">
                    <h4 className="project__meta-title">Category</h4>
                    <p className="project__meta-text">{project.Category}</p>
                </div>

                <div className="project__meta-item">
                    <h4 className="project__meta-title">Languages</h4>
                    <p className="project__meta-text">{project.Languages}</p>
                </div>

                <div className="project__meta-item">
                    <h4 className="project__meta-title">Github Link</h4>
                    {project.Githublink && (
                        <a
                            href={project.Githublink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project__meta-link"
                        >
                            {project.Githublink}
                        </a>
                    )}
                </div>
            </section>

            <div className="Demo">
                {project.Demolink && (
                    <a
                        href={project.Demolink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-btn"
                    >
                        Live Demo  →
                    </a>
                    
                )}
            </div>


            {/* OVERVIEW */}
            <section className="project__section">
                <h2 className="project__heading">Overview</h2>

                <p className="project__text">
                    {project.Description}
                </p>
            </section>

            {/* FULL IMAGE */}
            {project.MoreImage?.length > 0 && (
                <section className="project__media-full">
                    <img
                        src={project.MoreImage[0]?.startsWith('http') ? project.MoreImage[0] : `${import.meta.env.VITE_API_URL}/images/${project.MoreImage[0]}`}
                        alt="Main"
                    />
                </section>
            )}

            {/* GRID */}
            <section className="project__media-grid">
                {project.MoreImage?.slice(1).map((img, i) => (
                    <img
                        key={i}
                        className="project__media-item"
                        src={img?.startsWith('http') ? img : `${import.meta.env.VITE_API_URL}/images/${img}`}
                        alt="Gallery"
                    />
                ))}
            </section>

            {/* PROBLEMS */}
            {/* <section className="project__section">
                <h2 className="project__heading">Problems</h2>

                <p className="project__text">
                    {project.Description}
                </p>
            </section> */}


            <Footer />
        </div>
    );
}

export default Viewproject;