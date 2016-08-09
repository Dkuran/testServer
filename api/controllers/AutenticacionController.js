/**
 * AutenticacionController
 *
 * @description :: Server-side logic for managing Autenticacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var password = require('machinepack-passwords');

module.exports = {
    	inicioSesionMovil: function(req, res){
	    if(req.method == 'POST'){
	        var params = req.allParams();
	        Usuario.findOne({
	            
	            correo: params.correo
	        }).exec( function (err, UsuarioEncontrado){
	            
                if(err){
                    sails.log.error('Error, del servidor');
                    return res.serverError();
                }else{
                    
                    if(UsuarioEncontrado){
                        //sails.log.info(UsuarioEncontrado.password);
                        //copia
                        password.checkPassword({
                            passwordAttempt: params.password,
                            encryptedPassword: UsuarioEncontrado.password,
                        }).exec({
                        // An unexpected error occurred.
                            error: function (err){
                                sails.log.error(err);
                                return res.serverError();
                            },
                        // Password attempt does not match already-encrypted version
                            incorrect: function (){
                                return res.notFound();
                            },
                        // OK.
                            success: function (){
                                console.log(UsuarioEncontrado);
                                if(UsuarioEncontrado.tipo == 'Usuario'){
                                    req.session.usuario = UsuarioEncontrado;
                                    req.session.autentificado = true;
                                    delete UsuarioEncontrado.password
                                    return res.ok(UsuarioEncontrado);
                                }else{
                                    return res.notFound();
                                }
                                
                            },
                        });
                        
                        
                        
                        //copia el fin devuelve un arreglo el findOne devuelve solo uno
                        /*password.checkPassword({
                            passwordAttempt: params.password,
                            encryptedPassword: UsuarioEncontrado.password
                        }).exec({
                            error: function(err){
                                sails.log.error(err);
                                return res.serverError();
                            },
                            incorrect: function(){
                                return res.notFound();
                            },
                            success: function(){
                                req.session.usuario = UsuarioEncontrado;
                                req.session.autentificado = true;
                                return res.ok();
                            }
                            
                            
                        });*/
                        
                    }else{
                        
                        return res.notFound();
                    }
                }
	        })
	    }else{
	        return res.badRequest("Error, esta funcion no esta permitida!");
	    }
	},
	inicioSesion: function(req, res){
	    if(req.method == 'POST'){
	        var params = req.allParams();
	        Usuario.findOne({
	            
	            correo: params.correo
	        }).exec( function (err, UsuarioEncontrado){
	            
                if(err){
                    sails.log.error('Error, del servidor');
                    return res.serverError();
                }else{
                    
                    if(UsuarioEncontrado){
                        //sails.log.info(UsuarioEncontrado.password);
                        //copia
                        password.checkPassword({
                            passwordAttempt: params.password,
                            encryptedPassword: UsuarioEncontrado.password,
                        }).exec({
                        // An unexpected error occurred.
                            error: function (err){
                                sails.log.error(err);
                                return res.serverError();
                            },
                        // Password attempt does not match already-encrypted version
                            incorrect: function (){
                                return res.notFound();
                            },
                        // OK.
                            success: function (){
                                if(UsuarioEncontrado.tipo == 'Administrador'){
                                    req.session.usuario = UsuarioEncontrado;
                                    req.session.autentificado = true;
                                    delete UsuarioEncontrado.password
                                    return res.ok(UsuarioEncontrado);
                                }else{
                                    return res.notFound();
                                }
                            },
                        });
                        
                        
                        
                        //copia el fin devuelve un arreglo el findOne devuelve solo uno
                        /*password.checkPassword({
                            passwordAttempt: params.password,
                            encryptedPassword: UsuarioEncontrado.password
                        }).exec({
                            error: function(err){
                                sails.log.error(err);
                                return res.serverError();
                            },
                            incorrect: function(){
                                return res.notFound();
                            },
                            success: function(){
                                req.session.usuario = UsuarioEncontrado;
                                req.session.autentificado = true;
                                return res.ok();
                            }
                            
                            
                        });*/
                        
                    }else{
                        
                        return res.notFound();
                    }
                }
	        })
	    }else{
	        return res.badRequest("Error, esta funcion no esta permitida!");
	    }
	},
	cerrarSesion: function(req,res){
	    if (req.session.usuario) {
            sails.log.info('El usuario: ', req.session.usuario, ' ha salido');
            req.session.usuario = undefined;
            req.session.authenticated = undefined;
            return res.redirect('/login');
        } else {
            return res.redirect('/login');

        }
	}
};

