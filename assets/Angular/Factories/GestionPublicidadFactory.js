app.factory('GestionPublicidadFactory', ['$resource', function($resource) {

    var factory = $resource(
        masterUrl + '/PublicidadActiva/:idGestionPublicidad', {
            idGestionPublicidad: '@idGestionPublicidad'
        }, {
            actualizar: {
                method: 'PUT'
            },
            buscarXPublicidad: {
                url: masterUrl + "/PublicidadActiva?idPublicidad=:idPublicidad",
                method: 'GET',
                params: {
                    idPublicidad: '@idPublicidad'
                },
                isArray:true
            }
        });

    return factory;


}]);