import app from "./src/app.mjs";
import { connectDB } from "./src/configs/db.config.mjs";

const port = 3001;

app.listen(port, () => {
  console.log("Server Running");
  connectDB()
});
