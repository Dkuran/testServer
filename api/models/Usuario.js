/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var passwords = require('machinepack-passwords');

module.exports = {
  schema: true,
  tableName: 'Usuario',
  autoPK: true,

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    tipo: {
      type: 'string',
      enum:['Administrador','Usuario'],
      defaultsTo:'Usuario'
    },
    correo: {
      type: 'string',
      unique: true
    },
    colorwheel: {
      type: 'string'
    },
    tiempowheel: {
      type: 'integer'
    },
    sexo:{
      type: 'string'
    },
    fechaNacimiento: {
      type: 'date'
    },
    respuestaPreguntas: {
      collection: 'respuestasusuario',
      via: 'idUsuario'
    }

  },
  
  beforeCreate: function(valores, cb) {
    passwords.encryptPassword({
      password: valores.password
    }).exec({
      
      error: function(err){
        sails.log.error(err);
        cb(err);
      },
      success: function (resultado){
        valores.password = resultado;
        cb(); //es necesario enviar el callback par aque no se quede en un bucle infinito w8
      }
    });
  }
};
