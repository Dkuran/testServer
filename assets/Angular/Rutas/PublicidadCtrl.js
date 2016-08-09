app.controller('PublicidadCtrl', [
    '$scope',
    'ProveedorFactory',
    function($scope, ProveedorFactory) {
        //Variables
        $scope.botones = {
            Proveedor: false
        }
        $scope.nuevoProveedor = {
            nombre: "",
            direccionPrincipal: "",
            Url: ""
        }
        $scope.proveedores = [];

        //Cargar Proveedores

        ProveedorFactory
            .query()
            .$promise
            .then(
                function(respuesta) {
                    $scope.proveedores = respuesta;
                },
                function(error) {
                    console.log('Error', error);
                }
            );

        //Metodos

        $scope.ocultarBotonProveedor = function() {
            $scope.botones.Proveedor = !$scope.botones.Proveedor;
        };

        $scope.crearProveedor = function() {
            ProveedorFactory
                .save($scope.nuevoProveedor)
                .$promise
                .then(
                    function(respuesta) {
                        $scope.proveedores.push(respuesta);
                        if ($scope.proveedorForm) {
                            $scope.proveedorForm.$setPristine();
                            $scope.proveedorForm.$setUntouched();
                        }
                        $scope.nuevoProveedor = {
                            nombre: "",
                            direccionPrincipal: "",
                            Url: ""
                        }

                    },
                    function(error) {
                        console.log('Error', error);
                    }
                );
        }

        $scope.actualizarProveedor = function(interes) {

            ProveedorFactory
                .actualizar({
                    idProveedor: interes.id
                }, {
                    nombre: interes.nombre,
                    direccionPrincipal: interes.direccionPrincipal,
                    Url: interes.Url,
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
        
        $scope.borrarProveedor = function(id) {

            ProveedorFactory
                .delete({
                    idProveedor: id
                })
                .$promise
                .then(
                    function(respuesta) {
                        console.log("Borro Correctamente");
                        angular.forEach($scope.proveedores,function(proveedor,indiceProveedor){
                            if(proveedor.id==id){
                                $scope.proveedores.splice(indiceProveedor,1);
                            }
                        })
                    },
                    function(error) {
                        console.log("Error", error);
                    });
        };


    }
]);