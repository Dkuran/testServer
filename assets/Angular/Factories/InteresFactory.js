app.factory('InteresFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl + '/Interes/:idInteres', {
      idInteres: '@idInteres'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idInteres: '@idInteres'
        }

      },
      buscarXNombre: {
        url:masterUrl+"/Interes?nombre=:nombre",
        method: 'GET',
        params:{
          nombre:'@nombre'
        }

      }
    });

  return factory;


}]);

//InteresFactory.buscarXNombre({nombre:'qweraqewr'}).$promise.then(function(respuesta){},function(error){})


//InteresFactory.actualizar({idInteres:1},{nombre:'asd',tipo:'chepa',icono:"joder"}).$promise.then(function(respuesta){},function(error){})



/*
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
  */