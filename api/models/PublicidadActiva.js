/**
 * PublicidadActiva.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  tableName: 'PublicidadActiva',
  autoPK: true,

  attributes: {

    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    fechaInicio: {
      type: 'datetime'
    },
    fechaFin: {
      type: 'datetime'
    },
    estado: {
      type: 'string',
      enum: ['a', 'i']
    },
    idPublicidad: {
      model: 'publicidad',
      required: true
    },
    idSucursal: {
      model: 'sucursal',
      required: true
    }

  }
};
