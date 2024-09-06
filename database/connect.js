const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
try {
  exports.connectMongodb = async function () {
    const mongodbPass = process.env.MONGODB_PASS;
    const url = `mongodb+srv://Avazbek:${mongodbPass}@newsdb.o2mg7ry.mongodb.net/?retryWrites=true&w=majority&appName=Newsdb`;
    await mongoose
      .connect(url, {})
      .then(() => {
        console.log("Mongodb connect succsesfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };
} catch (error) {
  console.log(error);
}
