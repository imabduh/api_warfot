import {
  getAllPhotoService,
  createPhotoService,
  getOnePhotoService,
  updatePhotoService,
  deletePhotoService,
} from "../services/photo.service.mjs";
import responeApi from "../utils/response.util.mjs";

async function getAllPhotoController(req, res) {
  try {
    const respone = await getAllPhotoService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}

async function createPhotoController(req, res) {
  try {
    const respone = await createPhotoService(req);

    res.status(201).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}

async function getOnePhotoController(req, res) {
  try {
    const respone = await getOnePhotoService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}

async function updatePhotoController(req, res) {
  try {
    const respone = await updatePhotoService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}

async function deletePhotoController(req, res) {
  try {
    const respone = await deletePhotoService(req);

    res.status(200).json(responeApi(respone, true, "berhasil"));
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json(responeApi(error, false, error.message));
  }
}

export {
  getAllPhotoController,
  createPhotoController,
  getOnePhotoController,
  updatePhotoController,
  deletePhotoController,
};
