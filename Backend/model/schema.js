import mongoose from 'mongoose'

// add project
const projectSchema = new mongoose.Schema({
    ProjectName: String,
    Description: String,
    Category: String,
    Languages: String,
    Image: String,
    Githublink:String,
    Demolink:String,
    MoreImage: [String],
    isDelete: { type: Boolean, default: false, required: true },
});

export const Projectmodel = mongoose.model("Projects", projectSchema);



// About Area
const aboutSchema = new mongoose.Schema(
  {
    summaryparaone: { type: String, required: true },
    summaryparatwo: { type: String, required: true },

    techLanguages: {
      type: [String],
      default: [],
    },

    profilePhoto: { type: String, required: true },
    cv: { type: String, required: true },
  },
  { timestamps: true }
);

export const Aboutmodel = mongoose.model("NewaboutCollection", aboutSchema);












// Services


const servicesSchema = new mongoose.Schema(
  {
    Service: { type: String, required: true },
    ServiceDiscription: { type: String, required: true },
    Amount: { type: Number },
  }
);

export const Servicesmodel = mongoose.model("servicesCollection", servicesSchema);


