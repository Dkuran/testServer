/**
 * Respuestasusuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  tableName: 'RespuestaUsuario',
  autoPK: true,

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    respuestaEscrita: {
      type: 'string'
    },
    respuestaEntera: {
      type: 'integer'
    },
    respuestaNumerica: {
      type: 'float'
    },
    respuestaFecha: {
      type: 'datetime'
    },
    respuestaBooleana: {
      type: 'string',
      enum: ['v', 'f']
    },
    idPregunta: {
      model: 'preguntainteres',
      required: true
    },
    idUsuario: {
      model: 'usuario',
      required: true
    }

  }
};
