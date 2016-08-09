app.controller('GestionPublicidadCtrl', [
    '$scope',
    'CategoriaProveedorFactory',
    'InteresFactory',
    '$stateParams',
    'ProveedorFactory',
    'PublicidadFactory',
    'GestionPublicidadFactory',
    'SucursalFactory',
    function($scope, CategoriaProveedorFactory, InteresFactory, $stateParams, ProveedorFactory, PublicidadFactory, GestionPublicidadFactory, SucursalFactory) {
        //Variables
        $scope.botones = {
            gestionPublicidad: false
        };
        $scope.nuevoGestionPublicidad = {
            fechaInicio: "",
            fechaInicio: "",
            estado: "",
            idPublicidad: $stateParams.idPublicidad,
            idSucursal: undefined
        };
        $scope.estados=['a','i']
        $scope.gestionPublicidades = [];
        $scope.creado = false

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
                },
                function(error) {
                    console.log('Error', error);
                }
            );

        PublicidadFactory
            .get({
                idPublicidad: $stateParams.idPublicidad
            })
            .$promise
            .then(
                function(respuesta) {
                    $scope.publicidad = respuesta;
                },
                function(error) {
                    console.log('Error', error);
                }
            );

        SucursalFactory
            .buscarXIdProveedor({
                idProveedor: $stateParams.idProveedor
            })
            .$promise
            .then(
                function(respuesta) {
                    $scope.sucursales = respuesta;
                },
                function(error) {
                    console.log('Error', error);
                });

        GestionPublicidadFactory
            .buscarXPublicidad({
                idPublicidad: $stateParams.idPublicidad
            })
            .$promise
            .then(
                function(respuesta) {
                    $scope.gestionPublicidades = respuesta;
                    console.log(respuesta)
                    console.log(respuesta.length)
                    // if ($scope.gestionPublicidades.length > 0) {
                    //     $scope.creado = true;
                    //     $scope.gestionPublicidad = $scope.gestionPublicidades[0]
                    // }
                    // else {
                    //     $scope.creado = false;
                    // }

                },
                function(error) {

                });


        //Metodos

        $scope.ocultarBotonGestionPublicidad = function() {
            $scope.botones.gestionPublicidad = !$scope.botones.gestionPublicidad;
        };

        $scope.crearGestionPublicidad = function() {
            GestionPublicidadFactory
                .save($scope.nuevoGestionPublicidad)
                .$promise
                .then(
                    function(respuesta) {
                        $scope.gestionPublicidades.push(respuesta);
                        $scope.creado = true;
                    },
                    function(error) {
                        console.log('Error', error);
                    }
                );
        }

        $scope.actualizarGestionPublicidad = function(gestionPublicidad) {
            console.log(gestionPublicidad)
            GestionPublicidadFactory
                .actualizar({
                    idGestionPublicidad: gestionPublicidad.id
                }, {
                    fechaInicio: gestionPublicidad.fechaInicio,
                    fechaFin: gestionPublicidad.fechaFin,
                    estado:gestionPublicidad.estado
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


        $scope.desactivarPublicidad = function(gestionPublicidad) {

            PublicidadFactory
                .actualizar({
                    idGestionPublicidad: gestionPublicidad.id
                }, {
                    estado: "i"
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

        $scope.activarPublicidad = function(gestionPublicidad) {

            PublicidadFactory
                .actualizar({
                    idGestionPublicidad: gestionPublicidad.id
                }, {
                    estado: "a"
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



    }
]);