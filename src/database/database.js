import Sequelize from 'sequelize';

export const sequelize = new Sequelize('proyectsdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
