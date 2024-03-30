import photoModel from "../models/photo.model.mjs";
import errorRespone from "../utils/error.util.mjs";

async function getAllPhotoService(req) {
  const response = await photoModel.find();
  return response;
}

async function createPhotoService(req) {
  const { title, desc, url, price, idUser, love, getCount } = req.body;

  if (title === "" || desc === "" || url === "" || idUser === "") {
    throw errorRespone(400, "Masukan semua kolom!");
  }

  const response = await photoModel.create({
    title,
    desc,
    url,
    love,
    getCount,
    price,
    idUser,
  });
  return response;
}

async function getOnePhotoService(req) {
  const { id } = req.params;

  const response = await photoModel.findOne({ _id: id });
  return response;
}

async function updatePhotoService(req) {
  const { id } = req.params;
  const { title, desc, url, love, getCount, price, idUser } = req.body;

  const getPhoto = await photoModel.findOne({ _id: id });
  if (getPhoto) {
    const response = await photoModel.findOneAndUpdate(
      { _id: id },
      {
        title: title || getPhoto["title"],
        desc: desc || getPhoto["desc"],
        url: url || getPhoto["url"],
        love: love || getPhoto["love"],
        getCount: getCount || getPhoto["getCount"],
        price: price || getPhoto["price"],
        idUser: idUser || getPhoto["idUser"],
      }
    );
    return response;
  }
  return getPhoto;
}

async function deletePhotoService(req) {
  const { id } = req.params;

  const response = await photoModel.findOneAndDelete({ _id: id });
  return response;
}

export {
  getAllPhotoService,
  createPhotoService,
  getOnePhotoService,
  updatePhotoService,
  deletePhotoService,
};
