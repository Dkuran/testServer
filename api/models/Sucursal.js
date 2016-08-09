/**
 * Sucursal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  tableName: 'Sucursal',
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
    geolocalizacionX: {
      type: 'string'
    },
    geolocalizacionY: {
      type: 'string'
    },
    idProveedor: {
      model: 'proveedor',
      required: true
    }

  }
};
