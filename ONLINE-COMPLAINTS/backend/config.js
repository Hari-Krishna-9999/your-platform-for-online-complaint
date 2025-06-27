const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://23pa1a4584:hari18@cluster0.1ouaqqm.mongodb.net/complaintSystem?retryWrites=true&w=majority&appName=Cluster0",
)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));
