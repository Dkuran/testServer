app.controller('SucursalCtrl', [
    '$scope',
    'SucursalFactory',
    'InteresFactory',
    '$stateParams',
    'ProveedorFactory',
    function($scope, SucursalFactory, InteresFactory, $stateParams, ProveedorFactory) {
        //Variables
        $scope.stateParams = $stateParams;
        $scope.botones = {
            sucursal: false
        };
        $scope.nuevoSucursal = {
            nombre: "",
            geolocalizacionX: "",
            geolocalizacionY: "",
            idProveedor: $stateParams.idProveedor
        };
        $scope.sucursales = [];

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
                }
            );

        $scope.ocultarBotonSucursal = function() {
            $scope.botones.sucursal = !$scope.botones.sucursal;
        };

        $scope.crearSucursal = function() {
            SucursalFactory
                .save($scope.nuevoSucursal)
                .$promise
                .then(
                    function(respuesta) {
                        $scope.sucursales.push(respuesta);
                        if ($scope.sucursalForm) {
                            $scope.sucursalForm.$setPristine();
                            $scope.sucursalForm.$setUntouched();
                        }
                        $scope.nuevoSucursal = {
                            nombre: "",
                            geolocalizacionX: "",
                            geolocalizacionY: "",
                            idProveedor: $stateParams.idProveedor
                        };

                    },
                    function(error) {
                        console.log('Error', error);
                    }
                );
        }

        $scope.actualizarSucursal = function(sucursal) {

            SucursalFactory
                .actualizar({
                    idSucursal: sucursal.id
                }, {
                    nombre: sucursal.nombre,
                    geolocalizacionX: sucursal.geolocalizacionX,
                    geolocalizacionY: sucursal.geolocalizacionY
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


        $scope.borrarSucursal = function(id) {

            SucursalFactory
                .delete({
                    idSucursal: id
                })
                .$promise
                .then(
                    function(respuesta) {
                        console.log("Borro Correctamente");
                        angular.forEach($scope.sucursales, function(sucursal, indiceSucursal) {
                            if (sucursal.id == id) {
                                $scope.sucursales.splice(indiceSucursal, 1);
                            }
                        })
                    },
                    function(error) {
                        console.log("Error", error);
                    });
        };



    }
]);