import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 255
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 255
  },
  email: {
    type: String,
    required: true,
    maxLength: 255
  },
  password: {
    type: String,
    required: true,
    maxLength: 16
  },
  gender: {
    type: String,
    required: true,
    maxLength: 10,
    unique: true
  }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
