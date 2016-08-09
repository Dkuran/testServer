app.controller('PubCtrl', [
    '$scope',
    'CategoriaProveedorFactory',
    'InteresFactory',
    '$stateParams',
    'ProveedorFactory',
    'PublicidadFactory',
    function($scope, CategoriaProveedorFactory, InteresFactory, $stateParams, ProveedorFactory, PublicidadFactory) {
        //Variables
        $scope.botones = {
            publicidad: false
        };
        $scope.nuevoPublicidad = {
            nombre: "",
            url: "",
            idCatPro: $stateParams.idCategoriaProveedor
        };
        $scope.publicidades = [];

        //Cargar Proveedores

        ProveedorFactory
            .get({
                idProveedor: $stateParams.idProveedor
            })
            .$promise
            .then(
                function(respuesta) {
                    $scope.proveedor = respuesta;
                },
                function(error) {
                    console.log('Error', error);
                }
            );

        CategoriaProveedorFactory
            .get({
                idCategoriaProveedor: $stateParams.idCategoriaProveedor
            })
            .$promise
            .then(
                function(respuesta) {
                    $scope.categoriaProveedor = respuesta;
                    $scope.publicidades = respuesta.publicidades;
                    $scope.interes = respuesta.idInteres;
                },
                function(error) {
                    console.log('Error', error);
                }
            );

        // PublicidadFactory
        //     .buscarXIdCategoriaProveedor({
        //         idCategoriaProveedor: $stateParams.idCategoriaProveedor
        //     })
        //     .$promise
        //     .then(
        //         function(respuesta){
        //             $scope.publicidades 
        //         },
        //         function(error){

        //         });


        //Metodos

        $scope.ocultarBotonPublicidad = function() {
            $scope.botones.publicidad = !$scope.botones.publicidad;
        };

        $scope.crearPublicidad = function() {
            PublicidadFactory
                .save($scope.nuevoPublicidad)
                .$promise
                .then(
                    function(respuesta) {
                        $scope.publicidades.push(respuesta);
                        if ($scope.publicidadForm) {
                            $scope.publicidadForm.$setPristine();
                            $scope.publicidadForm.$setUntouched();
                        }
                        $scope.nuevoPublicidad = {
                            nombre: "",
                            url: "",
                            idCatPro: $stateParams.idCategoriaProveedor
                        };

                    },
                    function(error) {
                        console.log('Error', error);
                    }
                );
        }

        $scope.actualizarPublicidad = function(publicidad) {

            PublicidadFactory
                .actualizar({
                    idPublicidad: publicidad.id
                }, {
                    nombre: publicidad.nombre,
                    url: publicidad.url
                })
                .$promise
                .then(
                    function(respuesta) {
                        console.log("Edito Correctamente");
                    },
                    function(error) {
                        console.log("Error", error);
                    });
        };


        $scope.borrarPublicidad = function(id) {

            PublicidadFactory
                .delete({
                    idPublicidad: id
                })
                .$promise
                .then(
                    function(respuesta) {
                        console.log("Borro Correctamente");
                        angular.forEach($scope.publicidades, function(publicidad, indicePublicidad) {
                            if (publicidad.id == id) {
                                $scope.publicidades.splice(indicePublicidad, 1);
                            }
                        })
                    },
                    function(error) {
                        console.log("Error", error);
                    });
        };



    }
]);