import mongoose from "mongoose";

let UserData = mongoose.Schema({
  fisrtName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }},
  {timestamps: true},
);

let User=mongoose.model("data", UserData);
export default User;