/**
 * LocationController
 *
 * @description :: Server-side logic for managing locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 // var io = require('socket.io')(http);


module.exports = {

	device: function(req,res){
		Location.watch(req.socket);
	 console.log( 'User watching ' + req.socket.id );

		res.send({"Thanks":"umang"});

	}

// 	io.on('connection', function(socket){
//   console.log('a user connected');
// });

};
