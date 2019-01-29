const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const usuario = sequelize.define("usuario", {
    pasaporte: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefono: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    fecha_nacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    direccion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nacionalidad: {
        type: Sequelize.STRING,
        allowNull: false
    }
  }, {
    freezeTableName: true,

    tableName: 'USUARIO'
});

module.exports = usuario;




