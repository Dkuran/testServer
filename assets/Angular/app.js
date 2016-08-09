var app = angular.module('coachrobot', ['ui.bootstrap', 'ngResource', 'xeditable', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


    //   $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "Angular/Rutas/Home.html",
            controller: 'HomeCtrl'
        })
        .state('publicidad', {
            url: "/publicidad",
            templateUrl: "Angular/Rutas/Publicidad.html",
            controller: 'PublicidadCtrl'
        })
        .state('proveedorsucursal', {
            url: "/publicidad/:idProveedor/sucursal",
            templateUrl: "Angular/Rutas/Sucursal.html",
            controller: 'SucursalCtrl'
        })
        .state('proveedorcategoria', {
            url: "/publicidad/:idProveedor/categoria",
            templateUrl: "Angular/Rutas/ProveedorCategoria.html",
            controller: 'ProveedorCategoriaCtrl'
        })
        .state('publicidadcategoria', {
            url: "/publicidad/:idProveedor/categoria/:idCategoriaProveedor",
            templateUrl: "Angular/Rutas/Pub.html",
            controller: 'PubCtrl'
        })
        .state('publicidadgestion', {
            url: "/publicidad/:idProveedor/categoria/:idCategoriaProveedor/gestion/:idPublicidad",
            templateUrl: "Angular/Rutas/GestionPublicidad.html",
            controller: 'GestionPublicidadCtrl'
        });

}]);
