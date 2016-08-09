app.factory('ProveedorFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl + '/Proveedor/:idProveedor', {
      idProveedor: '@idProveedor'
    }, {
      actualizar: {
        method: 'PUT'
      }
    });

  return factory;


}]);
