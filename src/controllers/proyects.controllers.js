import { Proyect } from "../models/Proyect.js";

export const getProyects = (req, res) => {
  res.send('Getting proyect');
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