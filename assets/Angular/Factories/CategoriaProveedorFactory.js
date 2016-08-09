app.factory('CategoriaProveedorFactory', ['$resource', function($resource) {

    var factory = $resource(
        masterUrl + '/CategoriaProveedor/:idCategoriaProveedor', {
            idCategoriaProveedor: '@idCategoriaProveedor'
        }, {
            actualizar: {
                method: 'PUT'
            },
            buscarXIdProveedor: {
                url:'/CategoriaProveedor?idProveedor=:idProveedor',
                method: 'GET',
                isArray:true,
                params:{
                     idProveedor: '@idProveedor'
                }
            }
        });

    return factory;


}]);