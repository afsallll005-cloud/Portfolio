import { Aboutmodel, Projectmodel, Servicesmodel } from "../model/schema.js";

// Add Project
export const addproject = async (req, res) => {
  try {
    const {
      ProjectName,
      Description,
      Category,
      Languages,
      Githublink,
      Demolink
    } = req.body;

    // ✅ REQUIRED FIELD CHECKS
    if (!ProjectName || ProjectName.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "Project name is required"
      });
    }

    if (!Description || Description.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "Description is required"
      });
    }

    if (!Category || Category.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "Category is required"
      });
    }

    if (!Languages || Languages.length === 0) {
      return res.status(400).json({
        status: false,
        message: "Languages are required"
      });
    }

    // ✅ IMAGE VALIDATION
    if (!req.files || !req.files["Image"]) {
      return res.status(400).json({
        status: false,
        message: "Main image is required"
      });
    }

    const image = req.files["Image"]
      ? req.files["Image"][0].path
      : "";

    const moreImages = req.files["MoreImage"]
      ? req.files["MoreImage"].map(file => file.path)
      : [];

    // ✅ LIMIT MORE IMAGES (OPTIONAL)
    if (moreImages.length > 5) {
      return res.status(400).json({
        status: false,
        message: "Maximum 5 additional images allowed"
      });
    }

    // ✅ CREATE PROJECT
    const newProject = new Projectmodel({
      ProjectName,
      Description,
      Category,
      Languages,
      Githublink,
      Demolink,
      Image: image,
      MoreImage: moreImages
    });

    await newProject.save();

    res.status(201).json({
      status: true,
      message: "Project added successfully",
      data: newProject
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Server error"
    });
  }
};


//  GET PROJECTS
export const getListproject = async (req, res) => {
  try {
    const projects = await Projectmodel.find({ isDelete: false });
    res.json({ status: true, data: projects });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false });
  }
};





//  DELETE (soft delete)
export const deleteProject = async (req, res) => {
  try {
    await Projectmodel.findByIdAndUpdate(req.params.id, {
      isDelete: true
    });

    res.json({ status: true, message: "Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false });
  }
};


/* ================= GET SINGLE ================= */
export const getEditProject = async (req, res) => {
  try {
    const project = await Projectmodel.findById(req.params.id);
    res.json({ status: true, data: project });
  } catch (err) {
    res.status(500).json({ status: false });
  }
};

/* ================= UPDATE ================= */
export const updateProject = async (req, res) => {
  try {
    const id = req.params.id;

    const updateData = {
      ProjectName: req.body.ProjectName,
      Description: req.body.Description,
      Category: req.body.Category,
      Languages: req.body.Languages,
      Githublink: req.body.Githublink,
      Demolink: req.body.Demolink,
    };

    if (req.files?.Image) {
      updateData.Image = req.files.Image[0].path;
    }

    if (req.files?.MoreImage) {
      updateData.MoreImage = req.files.MoreImage.map(
        (file) => file.path
      );
    }

    const updated = await Projectmodel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json({
      status: true,
      message: "Updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ status: false });
  }
};



// get View Project  Details page

export const getviewproject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Projectmodel.findById(id);

    if (!project) {
      return res.status(404).json({
        status: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      status: true,
      data: project,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "Server error",
    });
  }
};





// About


export const addAbout = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const { summaryparaone, summaryparatwo, techLanguages } = req.body;

    const techArray = techLanguages
      ? techLanguages.split(",").map((item) => item.trim())
      : [];

    const profilePhoto = req.files?.profilePhoto?.[0]?.path;
    const cv = req.files?.cv?.[0]?.path;

    if (!summaryparaone || !summaryparatwo || !profilePhoto || !cv) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const existing = await Aboutmodel.findOne();
    if (existing) {
      return res.status(400).json({
        status: false,
        message: "About already exists",
      });
    }

    const newAbout = new Aboutmodel({
      summaryparaone,
      summaryparatwo,
      techLanguages: techArray,
      profilePhoto,
      cv,
    });

    await newAbout.save();

    res.json({
      status: true,
      message: "About added successfully",
      data: newAbout,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};

//About get

export const getAbout = async (req, res) => {
   try {
    const about = await Aboutmodel.findOne();

    res.json({
      status: true,
      data: about,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};









// Services

export const addService = async (req, res) => {
  try {
    const { Service, ServiceDiscription, Amount } = req.body;

    const newService = new Servicesmodel({
      Service,
      ServiceDiscription,
      Amount,
    });

    await newService.save();

    res.status(201).json({
      success: true,
      message: "Service added successfully",
      data: newService,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding service",
      error: error.message,
    });
  }
};


// GET ALL SERVICES
export const getServices = async (req, res) => {
  try {
    const services = await Servicesmodel.find();

    res.status(200).json({
      success: true,
      data: services,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching services",
      error: error.message,
    });
  }
};