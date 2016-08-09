/**
 * RoutesController
 *
 * @description :: Server-side logic for managing Routes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    admin: function(req, res) {
        return res.view('admin');
    }

};
