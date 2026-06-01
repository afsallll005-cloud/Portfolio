import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./EditProject.css";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    ProjectName: "",
    Description: "",
    Category: "",
    Languages: "",
    Githublink:"",
    Demolink:"",
  });

  const [image, setImage] = useState(null);
  const [moreImages, setMoreImages] = useState([]);

  /* FETCH */
  useEffect(() => {
    axios
      .get(`http://localhost:3800/editProject/${id}`)
      .then((res) => setProject(res.data.data))
      .catch((err) => console.log(err));
  }, [id]);

  /* INPUT CHANGE */
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("ProjectName", project.ProjectName);
    formData.append("Description", project.Description);
    formData.append("Category", project.Category);
    formData.append("Languages", project.Languages);

    formData.append("Githublink", project.Githublink);
    formData.append("Demolink", project.Demolink);


    if (image) {
      formData.append("Image", image);
    }

    for (let i = 0; i < moreImages.length; i++) {
      formData.append("MoreImage", moreImages[i]);
    }

    try {
      await axios.put(
        `http://localhost:3800/editProject/${id}`,
        formData
      );

      alert("Updated successfully");
      navigate("/listProject");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-main-content">


        <div className="edit-form-wrapper">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="project-edit-form">

            <input
              type="text"
              name="ProjectName"
              value={project.ProjectName}
              onChange={handleChange}
              placeholder="Project Name"
            />

            <input
              type="text"
              name="Category"
              value={project.Category}
              onChange={handleChange}
              placeholder="Category"
            />

            <input
              type="text"
              name="Languages"
              value={project.Languages}
              onChange={handleChange}
              placeholder="Languages"
            />

            <label>Main Project Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <label>Gallery Images</label>
            <input
              type="file"
              multiple
              onChange={(e) => setMoreImages(e.target.files)}
            />

            <textarea
              name="Description"
              value={project.Description}
              onChange={handleChange}
              placeholder="Description"
            />

            <div className="gihubLinks">

              <input
                type="text"
                name="Githublink"
                value={project.Githublink}
                onChange={handleChange}
                placeholder="Githublink"
              />


              <input
                type="text"
                name="Demolink"
                value={project.Demolink}
                onChange={handleChange}
                placeholder="Demolink"
              />
            </div>

            <button type="submit" className="update-btn">
              Update Project
            </button>

          </form>

          {/* PREVIEW */}
          <div className="edit-previews">

            {/* BACK BUTTON */}
            <Link to="/listProject" className="back-btn">
              ←  Back to Project
            </Link>


            <div className="preview-group">
              <label>Current Main Image</label>
              {project.Image && (
                <img
                  src={`http://localhost:3800/images/${project.Image}`}
                  className="edit-main-img-preview"
                  alt="main"
                />
              )}
            </div>

            <div className="preview-group">
              <label>Current Gallery</label>

              <div className="edit-gallery-grid">
                {project.MoreImage?.map((img, i) => (
                  <img
                    key={i}
                    src={`http://localhost:3800/images/${img}`}
                    className="edit-thumb-img"
                    alt="gallery"
                  />
                ))}
              </div>

            </div>


          </div>
        </div>


      </div>
    </div>
  );
}

export default EditProject;