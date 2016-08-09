/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {


  function crearDatos() {

    //2
    var usuarios = [{
      "nombre": "Adrian Eguez",
      "password": "1234",
      "correo": "eadepto@hotmail.com",
      "colorwheel": "",
      "tiempowheel": 1,
    }, {
      "nombre": "Andres Duran",
      "password": "1234",
      "correo": "andres.durana@epn.edu.ec",
      "colorwheel": "",
      "tiempowheel": 2,
    }];
    //10
    var intereses = [{
      "nombre": "Salud",
      "tipo": "Salud",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/hospital.png"
    }, {
      "nombre": "Cultura",
      "tipo": "Cultura",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/deberes.png"
    }, {
      "nombre": "Tecnología y Educación",
      "tipo": "Educacion",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/ventanas.png"
    }, {
      "nombre": "Lugares y Espacios",
      "tipo": "Turismo",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/camara-de-fotos.png"
    }, {
      "nombre": "Imagen y Estilo",
      "tipo": "imagen estilo",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/percha.png"
    }, {
      "nombre": "Compras y Viajes",
      "tipo": "compras viajes",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/avion-forma.png"
    }, {
      "nombre": "Alimentación y Ocio",
      "tipo": "alimentación ocio",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/casa.png"
    }, {
      "nombre": "Salud y Deporte",
      "tipo": "salud deporte",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/hospital.png"
    }, {
      "nombre": "Finazas y Negocios",
      "tipo": "finanzas negocios",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/maleta.png"
    }, {
      "nombre": "Relaciones y Agenda Social",
      "tipo": "relaciones agenda social",
      "icono": "https://coachrss-adrianeguez.c9users.io/images/equipo.png"
    }];

    //3
    var proveedores = [{
      nombre: 'Marathon',
      direccionPrincipal: 'Amazonas y Naciones Unidas',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png'
    }, {
      nombre: 'Cruz Azul',
      direccionPrincipal: '6 de Diciembre y El Inca',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg'
    }, {
      nombre: 'KFC',
      direccionPrincipal: 'Centro Comercial el Bosque Occidantal',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg'
    }];


    //6
    var preguntasinteres = [{
      "pregunta": "¿Cuanto pesas?",
      "descripcion": "Conocer el peso del Usuario",
      "tipo": "numerica",
      "idInteres": 1
    }, {
      "pregunta": "¿Cual es tu altura?",
      "descripcion": "Conocer la altura del Usuario",
      "tipo": "numerica",
      "idInteres": 1
    }, {
      "pregunta": "¿Cual es tu edad?",
      "descripcion": "Conocer la edad del Usuario",
      "tipo": "entera",
      "idInteres": 1
    }, {
      "pregunta": "¿En que fecha Naciste?",
      "descripcion": "Conocer la fecha de Nacimiento del Usuario",
      "tipo": "fecha",
      "idInteres": 1
    }, {
      "pregunta": "¿Comes 3 veces al dia?",
      "descripcion": "Conocer si el usuario come 3 veces al dia",
      "tipo": "booleana",
      "idInteres": 1
    }, {
      "pregunta": "¿Cual es tu comida favorita?",
      "descripcion": "Conocer la comida favorita del Usuario",
      "tipo": "escrita",
      "idInteres": 1
    }, {
      "pregunta": "¿Cuanto pesas?",
      "descripcion": "Conocer el peso del Usuario",
      "tipo": "numerica",
      "idInteres": 2
    }, {
      "pregunta": "¿Cual es tu altura?",
      "descripcion": "Conocer la altura del Usuario",
      "tipo": "numerica",
      "idInteres": 2
    }, {
      "pregunta": "¿Cual es tu edad?",
      "descripcion": "Conocer la edad del Usuario",
      "tipo": "entera",
      "idInteres": 2
    }, {
      "pregunta": "¿En que fecha Naciste?",
      "descripcion": "Conocer la fecha de Nacimiento del Usuario",
      "tipo": "fecha",
      "idInteres": 2
    }, {
      "pregunta": "¿Comes 3 veces al dia?",
      "descripcion": "Conocer si el usuario come 3 veces al dia",
      "tipo": "booleana",
      "idInteres": 2
    }, {
      "pregunta": "¿Cual es tu comida favorita?",
      "descripcion": "Conocer la comida favorita del Usuario",
      "tipo": "escrita",
      "idInteres": 2
    }, {
      "pregunta": "¿Cuanto pesas?",
      "descripcion": "Conocer el peso del Usuario",
      "tipo": "numerica",
      "idInteres": 3
    }, {
      "pregunta": "¿Cual es tu altura?",
      "descripcion": "Conocer la altura del Usuario",
      "tipo": "numerica",
      "idInteres": 3
    }, {
      "pregunta": "¿Cual es tu edad?",
      "descripcion": "Conocer la edad del Usuario",
      "tipo": "entera",
      "idInteres": 3
    }, {
      "pregunta": "¿En que fecha Naciste?",
      "descripcion": "Conocer la fecha de Nacimiento del Usuario",
      "tipo": "fecha",
      "idInteres": 3
    }, {
      "pregunta": "¿Comes 3 veces al dia?",
      "descripcion": "Conocer si el usuario come 3 veces al dia",
      "tipo": "booleana",
      "idInteres": 3
    }, {
      "pregunta": "¿Cual es tu comida favorita?",
      "descripcion": "Conocer la comida favorita del Usuario",
      "tipo": "escrita",
      "idInteres": 3
    }];

    //4
    var interesfeeds = [{
        "url": "https://www.vidaysalud.com/tema/diario/feed",
        "nombreProveedorRSS": "Vida y Salud",
        "descripcion": "Pagina web de Saludd",
        "idInteres": 1
      }, {
        "url": "http://www.eluniverso.com/rss/cultura.xml",
        "nombreProveedorRSS": "Cultura",
        "descripcion": "Pagina web de Cultura",
        "idInteres": 1
      }, {
        "url": "http://www.eluniverso.com/rss/tecnologia.xml",
        "nombreProveedorRSS": "Tecnologia",
        "descripcion": "Pagina web de Tecnologia",
        "idInteres": 1
      }, {
        "url": "http://www.eluniverso.com/rss/intercultural",
        "nombreProveedorRSS": "Intercultural",
        "descripcion": "Pagina web de Intercultural",
        "idInteres": 1
      }, {
        "url": "https://www.vidaysalud.com/tema/diario/feed",
        "nombreProveedorRSS": "Vida y Salud",
        "descripcion": "Pagina web de Saludd",
        "idInteres": 2
      }, {
        "url": "http://www.eluniverso.com/rss/cultura.xml",
        "nombreProveedorRSS": "Cultura",
        "descripcion": "Pagina web de Cultura",
        "idInteres": 2
      }, {
        "url": "http://www.eluniverso.com/rss/tecnologia.xml",
        "nombreProveedorRSS": "Tecnologia",
        "descripcion": "Pagina web de Tecnologia",
        "idInteres": 2
      }, {
        "url": "http://www.eluniverso.com/rss/intercultural",
        "nombreProveedorRSS": "Intercultural",
        "descripcion": "Pagina web de Intercultural",
        "idInteres": 2
      }, {
        "url": "https://www.vidaysalud.com/tema/diario/feed",
        "nombreProveedorRSS": "Vida y Salud",
        "descripcion": "Pagina web de Saludd",
        "idInteres": 3
      }, {
        "url": "http://www.eluniverso.com/rss/cultura.xml",
        "nombreProveedorRSS": "Cultura",
        "descripcion": "Pagina web de Cultura",
        "idInteres": 3
      }, {
        "url": "http://www.eluniverso.com/rss/tecnologia.xml",
        "nombreProveedorRSS": "Tecnologia",
        "descripcion": "Pagina web de Tecnologia",
        "idInteres": 3
      }, {
        "url": "http://www.eluniverso.com/rss/intercultural",
        "nombreProveedorRSS": "Intercultural",
        "descripcion": "Pagina web de Intercultural",
        "idInteres": 3
      }




    ];

    var categoriasProveedor = [{
      visitas: 5,
      idProveedor: 1,
      idInteres: 1
    }, {
      visitas: 10,
      idProveedor: 1,
      idInteres: 2
    }, {
      visitas: 15,
      idProveedor: 1,
      idInteres: 3
    }, {
      visitas: 5,
      idProveedor: 2,
      idInteres: 1
    }, {
      visitas: 10,
      idProveedor: 2,
      idInteres: 2
    }, {
      visitas: 15,
      idProveedor: 2,
      idInteres: 3
    }, {
      visitas: 5,
      idProveedor: 3,
      idInteres: 1
    }, {
      visitas: 10,
      idProveedor: 3,
      idInteres: 2
    }, {
      visitas: 15,
      idProveedor: 3,
      idInteres: 3
    }]



    var sucursales = [{
        geolocalizacionX: -0.177636,
        geolocalizacionY: -78.500645,
        idProveedor: 1
      }, {
        geolocalizacionX: -0.179322,
        geolocalizacionY: -78.483825,
        idProveedor: 1
      }, {
        geolocalizacionX: -0.307716,
        geolocalizacionY: -78.549382,
        idProveedor: 1
      }, {
        geolocalizacionX: -0.177636,
        geolocalizacionY: -78.500645,
        idProveedor: 2
      }, {
        geolocalizacionX: -0.179322,
        geolocalizacionY: -78.483825,
        idProveedor: 2
      }, {
        geolocalizacionX: -0.307716,
        geolocalizacionY: -78.549382,
        idProveedor: 2
      }, {
        geolocalizacionX: -0.177636,
        geolocalizacionY: -78.500645,
        idProveedor: 3
      }, {
        geolocalizacionX: -0.179322,
        geolocalizacionY: -78.483825,
        idProveedor: 3
      }, {
        geolocalizacionX: -0.307716,
        geolocalizacionY: -78.549382,
        idProveedor: 3
      }



    ];




    var publicidades = [{
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 1
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 1
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 1
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 2
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 2
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 2
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 3
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 3
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 3
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 4
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 4
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 4
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 5
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 5
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 5
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 6
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 6
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 6
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 7
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 7
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 7
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 8
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 8
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 8
    }, {
      nombre: 'Visita Marathon Pronto',
      Url: 'https://pbs.twimg.com/profile_images/446410364373053440/9VnoaQdm_400x400.png',
      idCatPro: 9
    }, {
      nombre: 'Cruz Azul los mejores descuentos',
      Url: 'http://www.ccelrecreo.com/wp-content/uploads/2014/06/LOGO-FARMACIAS-CRUZ-AZUL-WEB.jpg',
      idCatPro: 9
    }, {
      nombre: 'KFC la mejor comida siempre',
      Url: 'http://s1.stabroeknews.com/images/2016/01/KFC13.jpg',
      idCatPro: 9
    }]



    var publidadeActivas = [{
      fechaInicio: '2016-04-11',
      fechaFin: '2016-05-12',
      estado: 'i'
    }, {
      fechaInicio: '2016-02-20',
      fechaFin: '2016-06-16',
      estado: 'a'
    }, {
      fechaInicio: '2016-04-10',
      fechaFin: '2016-08-12',
      estado: 'a'
    }, {
      fechaInicio: '2016-03-20',
      fechaFin: '2016-04-12',
      estado: 'i'
    }]

    Usuario.create(usuarios).exec(function(err, usuarioCreado) {
      if (err) {
        console.log(err);
      }
      else {
        sails.log.info(usuarioCreado);
      }
    });

    Interes.create(intereses).exec(function(err, interesCreado) {
      if (err) {
        console.log(err);
      }
      else {
        sails.log.info(interesCreado);
      }
    });

    Preguntainteres.create(preguntasinteres).exec(function(err, preguntasinteresCreado) {
      if (err) {
        console.log(err);
      }
      else {
        sails.log.info(preguntasinteresCreado);
      }
    });


    Interesfeed.create(interesfeeds).exec(function(err, interesFeedCreado) {
      if (err) {
        console.log(err);
      }
      else {
        sails.log.info(interesFeedCreado);
      }
    });

    Proveedor.create(proveedores).exec(function(err, proveedorCreado) {
      if (err) {
        console.log(err);
      }
      else {
        sails.log.info(proveedorCreado);

      }
    });

    CategoriaProveedor.create(categoriasProveedor).exec(function(err, categoriaProveedorCreado) {
      if (err) {
        console.log(err);
      }
      else {
        sails.log.info(categoriaProveedorCreado);
      }
    })

    Sucursal
      .create(sucursales)
      .exec(function(err, sucursalesCreado) {
        if (err) {
          console.log(err);
        }
        else {
          sails.log.info(sucursalesCreado);

          for (var i = 0; i < sucursalesCreado.length; i++) {
            crearPublicidad(sucursalesCreado[i].id);
            console.log('entro con',i);
          }

        }
      });

    function crearPublicidad(idSucursal) {
      console.log('entro a publicidad con idSucursal',idSucursal);
      Publicidad
        .create(publicidades)
        .exec(function(err, publicidadesCreado) {
          if (err) {
            console.log(err);
          }
          else {
            sails.log.info(publicidadesCreado);

            for (var i = 0; i < publicidadesCreado.length; i++) {
              crearPublicidadActiva(idSucursal, publicidadesCreado[i].id);
            }


          }
        })

    }

    function crearPublicidadActiva(idSucursal, idPublicidad) {


      var publicidadActivaLocal = publidadeActivas;
      for (var i = 0; i < publicidadActivaLocal.length; i++) {
        publicidadActivaLocal[i].idSucursal = idSucursal;
        publicidadActivaLocal[i].idPublicidad = idPublicidad;
      };

      PublicidadActiva
        .create(publicidadActivaLocal)
        .exec(function(err, publidadeActivasCreado) {
          if (err) {
            console.log(err);
          }
          else {
            sails.log.info(publidadeActivasCreado);

          }
        });
    }

  }

  // crearDatos();
  
  //   function crearPreguntaInteres() {
  //     var preguntasinteresLocal = preguntasinteres;


  //     Preguntainteres
  //       .create(preguntasinteresLocal)
  //       .exec(function(err, preguntasinteresCreado) {
  //         if (err) {
  //           console.log(err);
  //         }
  //         else {
  //           sails.log.info(preguntasinteresCreado);
  //         }
  //       });
  //   }

  // }






  // Proveedor.create(proveedores).exec(function(err, proveedorCreado) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     sails.log.info(proveedorCreado);
  //     for (var i = 0; i < proveedorCreado.length; i++) {
  //       crearCategoriaProveedor(idInteres, proveedorCreado[i].id);
  //     }

  //   }
  // });


  // function crearProveedor(idInteres) {
  //   Proveedor.create(proveedores).exec(function(err, proveedorCreado) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     else {
  //       sails.log.info(proveedorCreado);
  //       for (var i = 0; i < proveedorCreado.length; i++) {
  //         crearCategoriaProveedor(idInteres, proveedorCreado[i].id);
  //       }

  //     }
  //   });
  // };

  // function crearPreguntaInteres(id) {
  //   console.log(id);
  //   var preguntasinteresLocal = preguntasinteres;
  //   for (var i = 0; i < preguntasinteres.length; i++) {
  //     preguntasinteresLocal[i].idInteres = id;
  //   };
  //   Preguntainteres
  //     .create(preguntasinteresLocal)
  //     .exec(function(err, preguntasinteresCreado) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         sails.log.info(preguntasinteresCreado);
  //       }
  //     });
  // };

  // function crearPreguntaInteres(id) {
  //   console.log(id);
  //   var interesFeedLocal = interesfeeds;
  //   for (var i = 0; i < interesFeedLocal.length; i++) {
  //     interesFeedLocal[i].idInteres = id;
  //   };
  //   Interesfeed
  //     .create(interesFeedLocal)
  //     .exec(function(err, interesFeedCreado) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         sails.log.info(interesFeedCreado);
  //       }
  //     });
  // };

  // function crearCategoriaProveedor(idInteres, idProveedor) {
  //   var categoriasProveedorLocal = categoriasProveedor;


  //   for (var i = 0; i < categoriasProveedorLocal.length; i++) {
  //     categoriasProveedorLocal[i].idInteres = idInteres;
  //     categoriasProveedorLocal[i].idProveedor = idProveedor;
  //   }



  //   CategoriaProveedor
  //     .create(categoriasProveedorLocal)
  //     .exec(function(err, categoriaProveedorCreado) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         sails.log.info(categoriaProveedorCreado);
  //         for (var i = 0; i < categoriaProveedorCreado.length; i++) {
  //           crearPublicidad(idProveedor, categoriaProveedorCreado[i].id);
  //         }
  //       }
  //     })
  // };

  // function crearPublicidad(idProveedor, idCatPro) {

  //   var publicidadesLocal = publicidades;


  //   for (var i = 0; i < publicidadesLocal.length; i++) {
  //     publicidadesLocal[i].idCatPro = idCatPro;
  //   }

  //   Publicidad
  //     .create(publicidadesLocal)
  //     .exec(function(err, publicidadesLocalCreado) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         sails.log.info(publicidadesLocalCreado);

  //         for (var i = 0; i < publicidadesLocalCreado.length; i++) {
  //           crearSucursal(idProveedor, publicidadesLocalCreado[i].id);
  //         }


  //       }
  //     })
  // };

  // function crearSucursal(idProveedor, idPublicidad) {
  //   var sucursalesLocal = sucursales;
  //   for (var i = 0; i < sucursalesLocal.length; i++) {
  //     sucursalesLocal[i].idProveedor = idProveedor;
  //   }
  //   Sucursal
  //     .create(sucursalesLocal)
  //     .exec(function(err, sucursalesLocalCreado) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         sails.log.info(sucursalesLocalCreado);

  //         for (var i = 0; i < sucursalesLocalCreado.length; i++) {
  //           crearSucursal(idPublicidad, sucursalesLocalCreado[i].id);
  //         }

  //       }
  //     });
  // };

  // function crearPublicidadActiva(idPublicidad, idSucursal) {

  //   var publidadeActivasLocal = publidadeActivas;
  //   for (var i = 0; i < publidadeActivasLocal.length; i++) {
  //     publidadeActivasLocal[i].idPublicidad = idPublicidad;
  //     publidadeActivasLocal[i].idSucursal = idSucursal;
  //   }

  //   PublicidadActiva
  //     .create(publidadeActivasLocal)
  //     .exec(function(err, publidadeActivasCreado) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         sails.log.info(publidadeActivasCreado);

  //       }
  //     });


  // }




  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
