import { Proyect } from "../models/Proyect.js";

export const getProyects = async (req, res) => {
  const proyects = await Proyect.findAll();
  console.log(proyects);
  res.json(proyects);
};

export const createProyect = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const newProyect = await Proyect.create({
      name,
      priority,
      description
    })
    console.log(newProyect);
    res.send('creating proyect');
  } catch (error) {
    console.error('error', error);
  }
};