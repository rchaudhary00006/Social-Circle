// const mongoose = require("mongoose");

// exports.connectDatabase = () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then((con) => console.log(`Database Connected: ${con.connection.host}`))
//     .catch((err) => console.log(err));
// };

const mongoose = require("mongoose");
const {  ServerApiVersion } = require('mongodb');

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    }).then(()=>{
      console.log('mongoose conntected');
    })
    .catch((err)=>{
      console.log(err);
    });
    
  } catch (err) {
    console.log(err);
  }
};


module.exports = dbConnect;
