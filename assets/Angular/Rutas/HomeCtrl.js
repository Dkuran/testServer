app.controller('HomeCtrl', [
    '$scope',
    '$filter',
    'InteresFactory',
    'InteresFeedFactory',
    'PreguntaInteresFactory',
    '$uibModal',
    'ChatRobotFactory',
    function($scope, $filter, InteresFactory, InteresFeedFactory, PreguntaInteresFactory, $uibModal, ChatRobotFactory) {

        // Variables
        $scope.intereses;
        $scope.feeds;
        $scope.interesFeed;
        $scope.preguntas;
        $scope.chats;
        $scope.preguntaInteres;
        $scope.clear = {};
        $scope.nuevoInteres = {
            nombre: '',
            tipo: '',
            identificador: '1',
            icono: ''
        };
        $scope.nuevaPregunta;
        $scope.tipoPreguntas2 = ['numerica', 'escrita', 'booleana', 'entera', 'fecha'];

        $scope.nuevoFeed;
        $scope.nuevoChat;


        $scope.visibleInteres = true;
        $scope.ocultarNuevointeres = function() {
            $scope.visibleInteres = !$scope.visibleInteres;
            console.log($scope.visibleInteres);
        };

        $scope.botonOcultar = true;
        $scope.ocultarAnadir = function() {

            $scope.botonOcultar = !$scope.botonOcultar;
            console.log($scope.ocultarBoton);
        };

        $scope.formProveedor = true;
        $scope.ocultarProveedor = function() {
            $scope.formProveedor = !$scope.formProveedor;
        };

        $scope.formPreguntas = true;
        $scope.ocultarPreguntas = function() {
            $scope.formPreguntas = !$scope.formPreguntas;
        };

        $scope.formChat = true;
        $scope.ocultarChat = function() {
            $scope.formChat = !$scope.formChat;
        };


        //Datos
        InteresFactory
            .query()
            .$promise
            .then(
                function(respuesta) {
                    $scope.intereses = respuesta;
                    $scope.interesActual = $scope.intereses[0];
                    $scope.interesActual.indice = 0;
                    $scope.actualizarIdInteres();


                },
                function(error) {

                });

        $scope.actualizarIndiceActual = function(indice) {
            console.log(indice);

            $scope.interesActual = $scope.intereses[indice];
            $scope.interesActual.indice = indice;
        };

        $scope.actualizarIdInteres = function() {
            $scope.actualizarIndiceActual($scope.interesActual.indice);
            $scope.nuevoFeed = {
                nombreProveedorRSS: '',
                descripcion: '',
                url: '',
                idInteres: $scope.interesActual.id
            };
            $scope.nuevaPregunta = {
                pregunta: '',
                descripcion: '',
                tipo: '',
                idInteres: $scope.interesActual.id
            };
            $scope.nuevoChat = {
                pregunta: '',
                respuesta: '',
                idInteres: $scope.interesActual.id
            };
        }

        $scope.crearInteres = function() {
            InteresFactory
                .save($scope.nuevoInteres)
                .$promise
                .then(
                    function(respuesta) {
                        $scope.intereses.push(respuesta);
                        if ($scope.interesForm) {
                            $scope.interesForm.$setPristine();
                            $scope.interesForm.$setUntouched();
                        }
                        $scope.nuevoInteres = angular.copy($scope.clear);


                    },
                    function(error) {

                    });
        };
        $scope.crearFeed = function() {
            $scope.nuevoFeed.idInteres = $scope.interesActual.id
            InteresFeedFactory
                .save($scope.nuevoFeed)
                .$promise
                .then(function(respuesta) {

                    angular.forEach($scope.intereses, function(interes, indice) {
                        if (interes.id == respuesta.idInteres) {
                            $scope.intereses[indice].feeds.push(respuesta);

                            $scope.actualizarIdInteres();
                        }

                    });
                    if ($scope.proveedorForm) {
                        $scope.proveedorForm.$setPristine();
                        $scope.proveedorForm.$setUntouched();
                    }
                    //
                }, function(error) {



                });
        };
        $scope.crearPregunta = function() {
            // $scope.nuevaPregunta.idInteres = $scope.interesActual.id;
            PreguntaInteresFactory
                .save($scope.nuevaPregunta)
                .$promise
                .then(
                    function(respuesta) {
                        $scope.intereses[$scope.interesActual.indice].preguntasInteres.push(respuesta);
                        $scope.actualizarIdInteres();
                        if ($scope.preguntaInteres) {
                            $scope.preguntaInteres.$setPristine();
                            $scope.preguntaInteres.$setUntouched();
                        }
                    },
                    function(error) {

                    });

        };
        $scope.crearChatRobot = function() {
            ChatRobotFactory
                .save($scope.nuevoChat)
                .$promise
                .then(function(respuesta) {


                    $scope.intereses[$scope.interesActual.indice].preguntasChat.push(respuesta);
                    // console.log(  $scope.intereses[indice]);
                    $scope.actualizarIdInteres();

                    if ($scope.chatForm) {
                        $scope.chatForm.$setPristine();
                        $scope.chatForm.$setUntouched();
                    }

                }, function(error) {



                });
        };



        $scope.borrarInteres = function(id) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'Angular/Modal/Confirm.html',
                controller: 'ConfirmarCtrl',
                size: 'sm'
            });



            modalInstance.result.then(
                function(respuesta) {
                    borrar();
                },
                function() {
                    console.log('Cancelo el Usuario');
                });

            function borrar() {
                InteresFactory
                    .delete({
                        idInteres: id
                    })
                    .$promise
                    .then(
                        function(respuesta) {
                            angular.forEach($scope.intereses, function(value, key) {
                                if (respuesta.id == value.id) {
                                    $scope.intereses.splice(key, 1);
                                }
                            });
                        },
                        function(error) {

                        });
            }

        };
        $scope.borrarFeed = function(id) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'Angular/Modal/Confirm.html',
                controller: 'ConfirmarCtrl',
                size: 'sm'
            });
            modalInstance.result.then(
                function(respuesta) {
                    borrar();
                },
                function() {
                    console.log('Cancelo el Usuario');
                });

            function borrar() {
                InteresFeedFactory.delete({
                    idInteresFeed: id
                }).$promise.then(function(respuesta) {





                    // respuesta = {
                    //     id: 1,
                    //     nombreProveedorRSS: "chepa",
                    //     descripcion: "cualquier verga",
                    //     url: "http://feed del putas",
                    //     idInteres: 1
                    // }



                    // respuesta 
                    // //1 Aca actualizamos
                    // $scope.intereses[] //arreglo de intereses
                    //         .feeds[] //Si vamos a utilizar en este caso
                    //         .preguntas[] //No vamos a utilizar en este caso
                    //         .chatrobot[] //No vamos a utilizar en este caso

                    // //2 Refrescamos el interes actual

                    // $scope.interesActual //Es solo un interes
                    //         .feeds[]
                    //         .preguntas[]
                    //         .chatrobot[]



                    // $scope.intereses[$scope.interesActual.indice] //Interes que necesitamos

                    // for(var i=0;i<$scope.intereses[$scope.interesActual.indice].feeds.length;i++){
                    //     if($scope.intereses[$scope.interesActual.indice].feeds[i].id==respuesta.id){
                    //         console.log('Tiene que actualizar este feed')
                    //         console.log('Feed Actual')
                    //         console.log($scope.intereses[$scope.interesActual.indice].feeds[i])
                    //         console.log('Feed Actualizado')
                    //         console.log(respuesta)
                    //     }
                    // }

                    angular.forEach($scope.intereses[$scope.interesActual.indice].feeds,
                        function(feed, indice) {
                            console.log('Inicio forEach');
                            // console.log('interes en el indice :'+feed);
                            // console.log(feed);
                            // console.log('ID Interes Actual del ForEach: '+feed.id);
                            // console.log('ID Interes Actual del Respuesta: '+respuesta.id);
                            if (feed.id == respuesta.id) {
                                console.log('Debe de borrar este registro');
                                console.log('Feed Actual')
                                console.log(feed)
                                console.log('Feed Actualizado')
                                console.log(respuesta)
                                    // $scope.intereses[$scope.interesActual.indice].feeds.splice(INDICE, CUANTOSELEMENTOS TENGO QUE BORRAR);
                                $scope.intereses[$scope.interesActual.indice]
                                    .feeds
                                    .splice(indice, 1);

                            }
                            console.log('Fin forEach');
                        })




                }, function(error) {})


            }
        };
        $scope.borrarPregunta = function(id) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'Angular/Modal/Confirm.html',
                controller: 'ConfirmarCtrl',
                size: 'sm'
            });



            modalInstance.result.then(
                function(respuesta) {
                    borrar();
                },
                function() {
                    console.log('Cancelo el Usuario');
                });

            function borrar() {
                PreguntaInteresFactory
                    .delete({
                        idPreguntainteres: id
                    }).$promise.then(function(respuesta) {



                        angular.forEach($scope.intereses[$scope.interesActual.indice].preguntasInteres,
                            function(feed, indice) {

                                if (feed.id == respuesta.id) {

                                    // $scope.intereses[$scope.interesActual.indice].feeds.splice(INDICE, CUANTOSELEMENTOS TENGO QUE BORRAR);
                                    $scope.intereses[$scope.interesActual.indice]
                                        .preguntasInteres
                                        .splice(indice, 1);

                                }

                            })



                    }, function(error) {})


            }

        }
        $scope.borrarChat = function(id) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'Angular/Modal/Confirm.html',
                controller: 'ConfirmarCtrl',
                size: 'sm'
            });



            modalInstance.result.then(
                function(respuesta) {
                    borrar();
                },
                function() {
                    console.log('Cancelo el Usuario');
                });

            function borrar() {
                ChatRobotFactory
                    .delete({
                        idChatRobot: id
                    }).$promise.then(function(respuesta) {



                        angular.forEach($scope.intereses[$scope.interesActual.indice].preguntasChat,
                            function(chat, indice) {

                                if (chat.id == respuesta.id) {

                                    // $scope.intereses[$scope.interesActual.indice].feeds.splice(INDICE, CUANTOSELEMENTOS TENGO QUE BORRAR);
                                    $scope.intereses[$scope.interesActual.indice]
                                        .preguntasChat
                                        .splice(indice, 1);

                                }

                            })



                    }, function(error) {})


            }

        }




        $scope.actualizarInteres = function(interes) {

            InteresFactory
                .actualizar({
                    idInteres: interes.id
                }, {
                    nombre: interes.nombre,
                    tipo: interes.tipo,
                    icono: interes.icono,

                })
                .$promise
                .then(
                    function(respuesta) {

                    },
                    function(error) {
                        console.log(error);
                    });
        };
        $scope.actualizarFeedInteres = function(interes) {
            InteresFeedFactory
                .actualizar({
                        idInteresFeed: interes.id

                    },

                    {

                        nombreProveedorRSS: interes.nombreProveedorRSS,
                        descripcion: interes.descripcion,
                        url: interes.url

                    })
                .$promise.then(function(respuesta) {}, function(error) {});

        };
        $scope.actualizarPreguntaInteres = function(interes) {
            PreguntaInteresFactory
                .actualizar({
                        idPreguntainteres: interes.id

                    },

                    {

                        pregunta: interes.pregunta,
                        descripcion: interes.descripcion,
                        tipo: interes.tipo

                    })
                .$promise.then(function(respuesta) {

                }, function(error) {})

        }
        $scope.actualizarChat = function(interes) {
            ChatRobotFactory
                .actualizar({
                        idChatRobot: interes.id

                    },

                    {

                        pregunta: interes.pregunta,
                        respuesta: interes.respuesta,


                    })
                .$promise.then(function(respuesta) {

                }, function(error) {})

        }

    }
]);