import "./Listproject.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ListProject() {

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/ListProject`)
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const deleteProject = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/deleteProject/${id}`);
      setProjects(projects.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashh">


      <div className="mainno">

        {/* TOPBAR */}
        <div className="top-bar">
          <Link to="/adminpanel" className="back-btn">← Back to Panel</Link>
        </div>

        <h1 id="h11">Projects</h1>

        {/* PROJECT CARDS */}
        <div className="cards">

          {projects.map((item) => (
            <div className="project-card" key={item._id}>

              {/* MAIN IMAGE */}
              <img
                src={item.Image?.startsWith('http') ? item.Image : `${import.meta.env.VITE_API_URL}/images/${item.Image}`}
                alt="project"
                className="project-img"
              />

              <div className="project-info">

                <h3>{item.ProjectName}</h3>

                <p className="category">{item.Category}</p>
                <p className="description">{item.Description}</p>

                <p className="tech">{item.Languages}</p>

                {/* MULTIPLE IMAGES PREVIEW */}
                <div className="more-images">
                  {item.MoreImage?.slice(0, 3).map((img, i) => (
                    <img
                      key={i}
                      src={img?.startsWith('http') ? img : `${import.meta.env.VITE_API_URL}/images/${img}`}
                      alt="more"
                    />
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="card-actions">

                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/editproject/${item._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteProject(item._id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default ListProject;