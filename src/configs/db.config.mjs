import mongoose from "mongoose";

function connectDB() {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Database Running");
    })
    .catch((e) => {
      console.log("Database Error");
      console.error(e);
    });
}

export default mongoose;
export { connectDB };
