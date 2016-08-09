/**
 * Preguntainteres.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  tableName: 'PreguntaInteres',
  autoPK: true,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    pregunta: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    tipo: {
      type: 'string',
      enum: ['escrita', 'numerica', 'booleana', 'entera', 'fecha']
    },
    idInteres: {
      model: 'interes',
      required:true
    }
  }
};
