/**
 * Interes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  tableName: 'Interes',
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
    icono: {
      type: 'string'
    },
    feeds: { 
      collection: 'interesfeed',
      via: 'idInteres'
    },
    preguntasInteres: {
      collection: 'preguntainteres',
      via: 'idInteres'
    },
    categoriasProveedor: {
      collection: 'categoriaproveedor',
      via: 'idInteres'
    },
    preguntasChat:{
      collection: 'chatrobot',
      via: 'idInteres'
    }
  }
};
