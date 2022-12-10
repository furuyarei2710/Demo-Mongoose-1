import mongoose from "mongoose";

const main = async () => {
  await mongoose.connect('mongodb+srv://admin:admin123@bitsdemo.uq7ferw.mongodb.net/?retryWrites=true&w=majority');
  console.log('Connected to MongoDB');
};

export default main;