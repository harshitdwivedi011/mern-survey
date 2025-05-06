import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phone: String,
  address: String,
  message: String,
});

const SurveyModel = mongoose.model("survey", SurveySchema);
export default SurveyModel;
