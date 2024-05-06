const app = require("./app");
const dotenv = require("dotenv");
const dbConnect = require("./config/database");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");

dotenv.config({
  path: "./.env",
});
// connectDatabase();
dbConnect();
const mongo_uri = `mongodb+srv://rchaudhary00006:ml77AmSHRxj01gMC@cluster0.xs8wplr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// cloudinary.config({
//   cloud_name: "di1vgk3qr",
//   api_key: "572729963374845",
//   api_secret: "cqArCiyFtNN6UZjfZKIBYU2119w",
// });
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
