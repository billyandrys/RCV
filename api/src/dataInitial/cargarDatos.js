const { Baby, Eps, Ips, Manager, Roles, User, Vaccination, BabyManager } = require("../db");
const fs = require("fs");

const rawBaby = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/baby.json"
);
const babyObj = JSON.parse(rawBaby);

const rawBabyManager = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/babyManager.json"
);
const babyManagerObj = JSON.parse(rawBabyManager);

const rawEps = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/eps.json"
);
const epsObj = JSON.parse(rawEps);

const rawIps = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/ips.json"
);
const ipsObj = JSON.parse(rawIps);

const rawManager = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/manager.json"
);
const managerObj = JSON.parse(rawManager);

const rawRoles = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/roles.json"
);
const rolesObj = JSON.parse(rawRoles);

const rawUsers = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/users.json"
);
const usersObj = JSON.parse(rawUsers);

const rawVaccination = fs.readFileSync(
  "/home/chanfle78/Proyectos/RCV/api/src/dataInitial/vaccination.json"
);
const vaccinationObj = JSON.parse(rawVaccination);

const CreateInstances = async (req, res) => {
  try {
    await Baby.bulkCreate(babyObj);
    await Eps.bulkCreate(epsObj);
    await Ips.bulkCreate(ipsObj);
    await Manager.bulkCreate(managerObj);
    await Roles.bulkCreate(rolesObj);
    await User.bulkCreate(usersObj);
    await Vaccination.bulkCreate(vaccinationObj);
    await BabyManager.bulkCreate(babyManagerObj);
    res.status(201).json({ msg: "database was successfully uploaded" });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = CreateInstances;
