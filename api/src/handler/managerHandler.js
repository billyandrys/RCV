const { Manager } = require("../db");

const handlerAllManager = async (req, res) => {
  const { idManager } = req.query;
  try {
    if (idManager) {
      const oneManager = await Manager.findByPk(idManager);
      if (oneManager === null)
        return res.status(200).json({ msg: `id: ${idManager} Not Found!` });
      res.status(200).json(oneManager);
    } else { 
      const allManager = await Manager.findAll();
      res.status(200).json(allManager);
    }
  } catch (error) {
    res.status(400).json({ msg: "Error: handlerAllManager..." + error });
  }
};

const handlerManagerCreate = async (req, res) => {
  const {
    id_baby,
    name,
    lastname,
    mobile,
    address,
    nro_cedula,
    email,
    whatsapp,
    id_eps,
  } = req.body;
  try {
    if (
      !id_baby ||
      !name ||
      !lastname ||
      !address ||
      !nro_cedula ||
      !email ||
      !whatsapp
    ) {
      res.status(400).json({ Error: "missing data" });
    } else {
      const [newManager, created] = await Manager.findOrCreate({
        where: { email: email },
        defaults: {
          id_baby: id_baby,
          name: name,
          lastname: lastname,
          address: address,
          mobile: mobile,
          id_eps:id_eps,
          nro_cedula: nro_cedula,
          email: email,
          whatsapp: whatsapp,
        }
      });
      if (created) {
        res
          .status(201)
          .json({ msg: "the manager has been successfully created" });
      } else {
        res.status(200).json({ msg: "the responsible already exists" });
      }
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const handlerUpdateManager = async (req, res) => {
  const {
    idManager,
    id_baby,
    name,
    lastname,
    mobile,
    address,
    nro_cedula,
    email,
    whatsapp,
    id_eps,
  } = req.body;
  try {
    const oneManager = await Manager.update(
      {
        id_baby: id_baby,
        name: name,
        lastname: lastname,
        mobile: mobile,
        address: address,
        nro_cedula: nro_cedula,
        email: email,
        whatsapp: whatsapp,
        id_eps: id_eps,
      },
      {
        where: {
          id: idManager,
        },
      }
    );
    res.status(200).json({msg: 'the manager was correctly updated'})
  } catch (error) {
    res.status(400).json({ msg: "Error: handlerUpdateManager..." + error });
  }
};

module.exports = {
  handlerAllManager,
  handlerManagerCreate,
  handlerUpdateManager,
};
