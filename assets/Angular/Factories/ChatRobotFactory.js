app.factory('ChatRobotFactory', ['$resource', function($resource) {

  var factory = $resource(
    masterUrl + '/Chatrobot/:idChatRobot', {
      idChatRobot: '@idChatRobot'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idChatRobot: '@idChatRobot'
        }
      }
    });

  return factory;


}]);