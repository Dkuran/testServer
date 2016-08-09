app.controller('ProveedorCategoriaCtrl', [
    '$scope',
    'CategoriaProveedorFactory',
    'InteresFactory',
    '$stateParams',
    'ProveedorFactory',
    function($scope, CategoriaProveedorFactory, InteresFactory, $stateParams, ProveedorFactory) {
        //Variables
        $scope.stateParams = $stateParams;
        $scope.botones = {
            proveedorCategoria: false
        };
        $scope.nuevoProveedorCategoria = {
            nombre: "",
            tipo: "",
            idInteres: undefined,
            idProveedor: $stateParams.idProveedor
        };
        $scope.proveedorCategorias = [];

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
            .buscarXIdProveedor({
                idProveedor: $stateParams.idProveedor
            })
            .$promise
            .then(
                function(respuesta) {
                    $scope.proveedorCategorias = respuesta;
                },
                function(error) {
                    console.log('Error', error);
                }
            );
        InteresFactory
            .query()
            .$promise
            .then(
                function(respuesta) {
                    $scope.intereses = respuesta;
                },
                function(error) {
                    console.log('Error', error);
                }
            );

        //Metodos

        $scope.ocultarBotonProveedorCategoria = function() {
            $scope.botones.proveedorCategoria = !$scope.botones.proveedorCategoria;
        };

        $scope.crearProveedorCategoria = function() {
            CategoriaProveedorFactory
                .save($scope.nuevoProveedorCategoria)
                .$promise
                .then(
                    function(respuesta) {
                        $scope.proveedorCategorias.push(respuesta);
                        if ($scope.proveedorCategoriaForm) {
                            $scope.proveedorCategoriaForm.$setPristine();
                            $scope.proveedorCategoriaForm.$setUntouched();
                        }
                        $scope.nuevoProveedorCategoria = {
                            nombre: "",
                            tipo: "",
                            visitas: "",
                            idInteres: undefined,
                            idProveedor: $stateParams.idProveedor
                        };

                    },
                    function(error) {
                        console.log('Error', error);
                    }
                );
        }

        $scope.actualizarProveedorCategoria = function(proveedorCategoria) {

            CategoriaProveedorFactory
                .actualizar({
                    idCategoriaProveedor: proveedorCategoria.id
                }, {
                    nombre: proveedorCategoria.nombre,
                    tipo: proveedorCategoria.tipo
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


        $scope.borrarProveedorCategoria = function(id) {

            CategoriaProveedorFactory
                .delete({
                    idCategoriaProveedor: id
                })
                .$promise
                .then(
                    function(respuesta) {
                        console.log("Borro Correctamente");
                        angular.forEach($scope.proveedorCategorias, function(proveedorCategoria, indiceProveedorCategoria) {
                            if (proveedorCategoria.id == id) {
                                $scope.proveedorCategorias.splice(indiceProveedorCategoria, 1);
                            }
                        })
                    },
                    function(error) {
                        console.log("Error", error);
                    });
        };



    }
]);