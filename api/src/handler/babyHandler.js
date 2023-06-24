const { Baby } = require("../db");

const handlerAllBaby = async (req, res) => {
  const { idBaby } = req.query;
  try {
    if (idBaby) {
      const oneBaby = await Baby.findByPk(idBaby);
      if (oneBaby === null)
        return res.status(200).json({ msg: `id: ${idBaby} Not Found!` });
      res.status(200).json(oneBaby);
    } else {
      const allBaby = await Baby.findAll();
      console.log("handlerAllBaby");
      res.status(200).json(allBaby);
    }
  } catch (error) {
    res.status(400).json({ msg: "Error: handlerAllBaby..." + error });
  }
};

const handlerBabyCreate = async (req, res) => {
  const {
    name,
    lastname,
    nro_cedula,
    codigo_eps,
    dateOfBirth,
    id_father,
    id_mother,
    weight,
    height,
    gender,
    bloodType,
    note,
  } = req.body;
  try {
    if (
      !name ||
      !lastname ||
      !nro_cedula ||
      !codigo_eps ||
      !dateOfBirth ||
      !id_father ||
      !id_mother ||
      !weight ||
      !height ||
      !gender ||
      !bloodType
    ) {
      res.status(400).json({ Error: "missing data" });
    } else {
      const [newBaby, created] = await Baby.findOrCreate({
        where: { nro_cedula: nro_cedula },
        defaults: {
          name: name,
          lastname: lastname,
          codigo_eps: codigo_eps,
          dateOfBirth: dateOfBirth,
          id_father: id_father,
          id_mother: id_mother,
          weight: weight,
          height: height,
          gender: gender,
          bloodType: bloodType,
          note: note,
        },
      });
      if (created) {
        res.status(201).json({ msg: "the baby has been successfully created" });
      } else {
        res.status(200).json({ msg: "the baby already exists" });
      }
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const handlerUpdateBaby = async (req, res) => {
  const {
    nro_cedula,
    name,
    lastname,
    codigo_eps,
    dateOfBirth,
    id_father,
    id_mother,
    weight,
    height,
    gender,
    bloodType,
    note,
  } = req.body;
  try {
    const oneBaby = await Baby.update(
      {
        name: name,
        lastname: lastname,
        codigo_eps: codigo_eps,
        dateOfBirth: dateOfBirth,
        id_father: id_father,
        id_mother: id_mother,
        weight: weight,
        height: height,
        gender: gender,
        bloodType: bloodType,
        note: note,
      },
      {
        where: {
          nro_cedula: nro_cedula,
        },
      }
    );
    res.status(200).json({ msg: "the baby was correctly updated" });
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Error: handlerUpdateBaby..." + error.message });
  }
};

module.exports = {
  handlerAllBaby,
  handlerBabyCreate,
  handlerUpdateBaby,
};
