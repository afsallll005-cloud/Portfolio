import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from "multer";
dotenv.config()
import fs from "fs";
import path from "path";
import { addAbout, addproject, addService, deleteProject, getAbout, getEditProject, getListproject, getServices, getviewproject, updateProject } from './controller/controller.js';

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200,
}


const app = express();


const uploadPath = path.join("public", "images");



// auto create folder
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });



const dburl = process.env.DB_URL;
mongoose.connect(dburl).then(() => console.log("connection Successful"))
    .catch((error) => console.error("connection error;", error))





app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static('public'))
// app.use("/images", express.static("public/images"));
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






const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(
        `app is listening on http://localhost:${PORT}/`
    )
})



