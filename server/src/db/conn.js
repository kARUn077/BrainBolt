const mongoose = require("mongoose");

const DB = "mongodb+srv://karunpoddar0_db_user:lQHJ264OK7V0yk05@cluster0.m4v2fjr.mongodb.net/?appName=Cluster0";

mongoose.connect(DB)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("MongoDB Connection failed:", err.message);
});
