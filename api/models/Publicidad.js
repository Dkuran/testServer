/**
 * Publicidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  tableName: 'Publicidad',
  autoPK: true,


  attributes: {

    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: 'string'
    },
    nombre: {
      type: 'string'
    },
    idCatPro: {
      model: 'categoriaproveedor',
      required: true
    }

  }
};
