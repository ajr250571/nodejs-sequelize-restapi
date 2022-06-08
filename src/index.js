import app from "./app.js";
import { sequelize } from "./database/database.js";

//import './models/Proyect.js';
//import './models/Task.js';

async function main() {
  try {
    /*
    await sequelize.authenticate();
    console.log('Coneccion establecida...');
    */

    await sequelize.sync({ force: false });

    app.listen(3000);
    console.log('Server is listening on port 3000');
  } catch (error) {
    console.error('No se puede conectar a la dase de datos:', error);
  }

};

main();
