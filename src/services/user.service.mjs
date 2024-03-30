import userModel from "../models/user.model.mjs";
import errorRespone from "../utils/error.util.mjs";
import { generateToken } from "../utils/token.util.mjs";

async function getAllUserService(req) {
  const response = await userModel.find();

  return response;
}
async function createUserService(req) {
  const { name, desc, email, pswd } = req.body;

  if (name === "" || desc === "" || email === "" || pswd === "") {
    throw errorRespone(400, "Masukan semua kolom!");
  }

  const getUser = await userModel.findOne({ email: email });
  if (getUser) {
    throw errorRespone(400, "Pengguna sudah ada!");
  }
  const response = await userModel.create({
    name: name,
    desc: desc,
    email: email,
    pswd: pswd,
  });
  return response;
}
async function getOneUserService(req) {
  const { id } = req.params;

  const response = await userModel.findOne({ _id: id });
  return response;
}
async function updateUserService(req) {
  const { id } = req.params;
  const { name, desc, email, pswd } = req.body;

  const getUser = await userModel.findOne({ _id: id });
  if (getUser) {
    const response = await userModel.findOneAndUpdate(
      { _id: id },
      {
        name: name || getUser["name"],
        desc: desc || getUser["desc"],
        email: email || getUser["email"],
        pswd: pswd || getUser["pswd"],
      }
    );
    return response;
  }
  return getUser;
}
async function deleteUserService(req) {
  const { id } = req.params;

  const response = await userModel.findOneAndDelete({ _id: id });
  return response;
}

async function loginUserService(req) {
  const { email, pswd } = req.body;

  if (email === "" || pswd === "") {
    throw errorRespone(400, "Masukan semua kolom!");
  }

  const getUser = await userModel.findOne({ email: email });
  if (!getUser) {
    throw errorRespone(400, "Pengguna belom terdaftar!");
  }
  const response = generateToken({ id: getUser["_id"].toString() });
  req.user = response;
  return response;
}

export {
  getAllUserService,
  createUserService,
  getOneUserService,
  updateUserService,
  deleteUserService,
  loginUserService,
};
