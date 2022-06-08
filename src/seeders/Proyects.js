import Proyect from '../models/Proyect';

export const newProyect = Proyect.create({ 
  name: "Jane",
  priority: 10,
  description: 'Proyecto Node' 
});
