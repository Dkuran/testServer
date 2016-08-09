/**
 * CategoriaProveedor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  tableName: 'CategoriaProveedor',
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
    tipo: {
      type: 'string'
    },
    visitas: {
      type: 'integer',
      defaultsTo:0
    },
    idProveedor: {
      model: 'proveedor',
      required: true
    },
    idInteres: {
      model: 'interes',
      required: true
    },
    publicidades: {
      collection: 'publicidad',
      via: 'idCatPro'
    }

  }
};
