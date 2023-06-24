const { Vaccination } = require("../db");

const handlerAllVaccination = async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      const oneVaccination = await Vaccination.findByPk(id);
      if (oneVaccination === null)
        return res.status(200).json({ msg: `id: ${id} Not Found!` });
      res.status(200).json(oneVaccination);
    } else {
      const allVaccination = await Vaccination.findAll();
      res.status(200).json(allVaccination);
    }
  } catch (error) {
    res.status(400).json({ msg: "Error: handlerAllVaccination..." + error });
  }
};
const handlerVaccinationCreate = async (req, res) => {
  const {
    id_baby,
    protectMeFrom,
    dose,
    applicationDate,
    laboratory,
    nro_lote,
    id_ips_vacunadora,
    nurse,
  } = req.body;

  try {
    if (
      !id_baby ||
      !protectMeFrom ||
      !dose ||
      !applicationDate ||
      !laboratory ||
      !nro_lote ||
      !id_ips_vacunadora ||
      !nurse
    ) {
      res.status(400).json({ Error: "missing data" });
    } else {
      const newVaccination = await Vaccination.create({
        id_baby: id_baby,
        protectMeFrom: protectMeFrom,
        dose: dose,
        applicationDate: applicationDate,
        laboratory: laboratory,
        nro_lote: nro_lote,
        id_ips_vacunadora: id_ips_vacunadora,
        nurse: nurse,
      });

      res
        .status(201)
        .json({ msg: "the Vaccination has been successfully created" });
    }
  } catch (error) {
    res.status(400).json({msg: error.message});
  }
};
const handlerUpdateVaccination = async (req, res) => {
  const {
    id,
    id_baby,
    protectMeFrom,
    dose,
    applicationDate,
    laboratory,
    nro_lote,
    id_eps_vacunadora,
    nurse,
  } = req.body;
  try {
    const oneVaccination = await Vaccination.update(
      {
        id_baby: id_baby,
        protectMeFrom: protectMeFrom,
        dose: dose,
        applicationDate: applicationDate,
        laboratory: laboratory,
        nro_lote: nro_lote,
        id_eps_vacunadora: id_eps_vacunadora,
        nurse: nurse,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ msg: "the Vaccination was correctly updated" });
  } catch (error) {
    res.status(400).json({ msg: "Error: handlerUpdateVaccination..." + error });
  }
};

module.exports = {
  handlerAllVaccination,
  handlerUpdateVaccination,
  handlerVaccinationCreate,
};
