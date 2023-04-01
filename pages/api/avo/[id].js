import DB from "../../../database/db";

const allAvos = async (req, res) => {
  const db = new DB();
  const entry = await db.getById(req.query.id);
  res.status(200).json(entry);
};

export default allAvos;
