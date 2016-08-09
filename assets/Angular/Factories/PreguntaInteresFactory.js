app.factory('PreguntaInteresFactory', ['$resource', function($resource) {
  var factory = $resource(
    masterUrl + '/Preguntainteres/:idPreguntainteres', {
      idPreguntainteres: '@idPreguntainteres'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idPreguntainteres: '@idPreguntainteres'
        }
      }
    });
  return factory;
}]);
