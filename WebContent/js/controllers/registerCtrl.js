angular.module('chollosApp')
.controller('registerCtrl', ['usersFactory','$routeParams','$location',
	function(usersFactory,$routeParams,$location){
var registerViewModel = this;
registerViewModel.user={};
registerViewModel.functions = {
where : function(route){
		return $location.path() == route;
	},
	createUser : function () {
		usersFactory.createUsuario(registerViewModel.user)
			.then(function(response){
			console.log("User create");
			window.location.replace('https://localhost:8443/chollosDAO/');
		}, function(response){
			console.log("Error create user");
		})
	}
}
}]);