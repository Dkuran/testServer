app.factory('PublicidadFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl + '/Publicidad/:idPublicidad', {
      idPublicidad: '@idPublicidad'
    }, {
      actualizar: {
        method: 'PUT'
      },
      buscarXIdCategoriaProveedor: {
        url: '/Publicidad?idCategoriaProveedor=:idCategoriaProveedor',
        method: 'GET',
        isArray: true,
        params: {
          idCategoriaProveedor: '@idCategoriaProveedor'
        }
      }
    });

  return factory;


}]);
