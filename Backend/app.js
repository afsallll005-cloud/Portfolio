import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from "multer";
dotenv.config()
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { addAbout, addproject, addService, deleteProject, getAbout, getEditProject, getListproject, getServices, getviewproject, updateProject } from './controller/controller.js';

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200,
}


const app = express();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'portfolio',
  },
});

const upload = multer({ storage });



const dburl = process.env.DB_URL;
mongoose.connect(dburl).then(() => console.log("connection Successful"))
    .catch((error) => console.error("connection error;", error))





app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const uploadPath = path.join("public", "images");

// Images are now served via Cloudinary (for new uploads)
// But we keep this for backwards compatibility with old database records locally
app.use("/images", express.static(uploadPath));



//  Add Project
app.post("/addProject", upload.fields([
    { name: "Image", maxCount: 1 },
    { name: "MoreImage", maxCount: 5 }]), addproject);

app.get("/ListProject", getListproject)


app.delete("/deleteProject/:id", deleteProject);


// GET SINGLE
app.get("/editProject/:id", getEditProject);

// UPDATE
app.put(
  "/editProject/:id",
  upload.fields([
    { name: "Image", maxCount: 1 },
    { name: "MoreImage", maxCount: 10 },
  ]),
  updateProject
);

// View project details page
app.get("/viewproject/:id", getviewproject);

// Add About
app.get("/addabout",getAbout)
app.post("/addabout",upload.fields([
  { name: "profilePhoto", maxCount: 1 },
  { name: "cv", maxCount: 1 },
]), addAbout)



app.post("/addService", addService);
app.get("/getServices", getServices);






const PORT = process.env.PORT || 4000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`app is listening on http://localhost:${PORT}/`);
    });
}
export default app;



