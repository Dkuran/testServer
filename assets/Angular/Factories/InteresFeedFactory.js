app.factory('InteresFeedFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl + '/Interesfeed/:idInteresFeed', {
      idInteresFeed: '@idInteresFeed'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idInteresFeed: '@idInteresFeed'
        }
      }
    });

  return factory;


}]);
