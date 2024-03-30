import mongoose from "../configs/db.config.mjs";

const photoSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    desc: { type: String, require: true },
    url: { type: String, require: true },
    love: { type: Number, require: true, default: 0 },
    getCount: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true, default: 0 },
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { timestamps: true }
);

const photoModel = mongoose.model("photo", photoSchema);

export default photoModel;
