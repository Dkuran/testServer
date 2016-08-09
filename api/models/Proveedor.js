/**
 * Proveedor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  tableName: 'Proveedor',
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
    direccionPrincipal: {
      type: 'string'
    },
    Url: {
      type: 'string'
    },
    categoriasProveedor: {
      collection: 'categoriaproveedor',
      via: 'idProveedor'
    },
    sucursales: {
      collection: 'sucursal',
      via: 'idProveedor'
    }

  }
};
