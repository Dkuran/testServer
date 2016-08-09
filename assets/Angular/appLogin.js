var appLogin = angular.module('coachrobotlogin', ['toastr']);
appLogin.controller('LoginCtrl', ['$scope', '$http', 'toastr', '$window', '$timeout', function ($scope, $http, toastr, $window, $timeout) {
  $scope.credenciales = {
    usuario: '',
    password: ''
  }

  $scope.login = function () {
    $http({
      url: masterUrl + '/Autenticacion/inicioSesion',
      method: 'POST',
      data: {
        correo: $scope.credenciales.usuario,
        password: $scope.credenciales.password

      }
    }).then(
      function (respuesta) {
        console.log(respuesta);
        
        if (respuesta.data.tipo == 'Administrador') {
          toastr.success('Será redirigido en 3 segundos.', '¡Autenticado!');
          $timeout(function () {
            $window.location.assign(masterUrl + '/admin');
          }, 3000);
        }else{
            toastr.error('No es un Administrador, intentelo de nuevo.', '¡Error!');
        }
      },
      function (err) {
        toastr.warning(err.data.error, '¡Error!');
        console.log(err);
      })

  }


}]);
