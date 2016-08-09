app.factory('SucursalFactory', ['$resource', function($resource) {

    var factory = $resource(
        masterUrl + '/Sucursal/:idSucursal', {
            idSucursal: '@idSucursal'
        }, {
            actualizar: {
                method: 'PUT'
            },
            buscarXIdProveedor: {
                url: '/Sucursal?idProveedor=:idProveedor',
                method: 'GET',
                isArray: true,
                params: {
                    idProveedor: '@idProveedor'
                }
            }
        });

    return factory;


}]);