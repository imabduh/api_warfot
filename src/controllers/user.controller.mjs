import {
  getAllUserService,
  createUserService,
  getOneUserService,
  updateUserService,
  deleteUserService,
  loginUserService,
} from "../services/user.service.mjs";
import responeApi from "../utils/response.util.mjs";

async function getAllUserController(req, res) {
  try {
    const respone = await getAllUserService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}
async function createUserController(req, res) {
  try {
    const respone = await createUserService(req);

    res.status(201).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}
async function getOneUserController(req, res) {
  try {
    const respone = await getOneUserService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}
async function updateUserController(req, res) {
  try {
    const respone = await updateUserService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}
async function deleteUserController(req, res) {
  try {
    const respone = await deleteUserService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}
async function loginUserController(req, res) {
  try {
    const respone = await loginUserService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}
export {
  getAllUserController,
  createUserController,
  getOneUserController,
  updateUserController,
  deleteUserController,
  loginUserController
};
