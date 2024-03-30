import mongoose from "../configs/db.config.mjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    desc: { type: String, require: true },
    email: { type: String, require: true },
    pswd: { type: String, require: true },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
