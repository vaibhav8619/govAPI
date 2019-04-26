// External Dependancies
const mongoose = require("mongoose");

const locRecordSchema = new mongoose.Schema(
  {
    officename: String,
    pincode: Number,
    officeType: String,
    Deliverystatus: String,
    divisionname: String,
    regionname: String,
    circlename: String,
    Taluk: String,
    Districtname: String,
    statename: String,
    Telephone: String,
    "Related Suboffice": String,
    "Related Headoffice": String,
    longitude: String,
    latitude: String
  },
  { collection: "loc" }
);

module.exports = mongoose.model("LocRecord", locRecordSchema);
