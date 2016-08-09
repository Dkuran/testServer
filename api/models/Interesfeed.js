/**
 * Interesfeed.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  tableName: 'InteresFeed',
  autoPK: true,

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    nombreProveedorRSS: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    idInteres: {
      model: 'interes',
      required:true
    }

  }
};
