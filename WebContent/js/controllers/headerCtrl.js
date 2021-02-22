angular.module('chollosApp')
.controller('headerCtrl', ['usersFactory','$routeParams','$location',function(usersFactory,$routeParams,$location){
    var headerViewModel = this;
    headerViewModel.user={};
    headerViewModel.functions = {
    		where : function(route){
       			return $location.path() == route;
       		},
		readUser : function() {
			usersFactory.getUser()
				.then(function(response){
					headerViewModel.user = response
					//console.log("Getting user with id: ", headerViewModel.user.id," Response: ", response);
    			}, function(response){
    				console.log("Error reading user data");
    			})
		},
		
		editarUsuario : function() {
			usersFactory.putUser(headerViewModel.user)
				.then(function(response){
					console.log("Getting user with id: ", headerViewModel.user.id," Response: ", response);
					window.location.replace('https://localhost:8443/chollosDAO');
					
    			}, function(response){
    				console.log("Error reading user data");
    			})
		},
		
		eliminarUsuario : function() {
			usersFactory.deleteUser()
				.then(function(response){
					console.log("Getting user with id: ", headerViewModel.user.id," Response: ", response);
					window.location.replace('https://localhost:8443/chollosDAO');
    			}, function(response){
    				console.log("Error reading user data");
    			})
		},
		
		
		headerHandlerSwitcher : function(){
			if ( headerViewModel.functions.where('/editUser')){
				console.log($location.path());
				 headerViewModel.functions.editarUsuario();
				// headerViewModel.functions.readUser();
			}
			else {
				if(headerViewModel.functions.where('/deleteUser')){
					console.log($location.path());
					 headerViewModel.functions.eliminarUsuario();
				}else{
					console.log($location.path());
				}
				
			
			}
			$location.path('/');
		}
    }
   	if ($routeParams.ID==undefined) headerViewModel.functions.readUser();
   	//else headerHandlerViewModel.functions.readChollo($routeParams.ID);
   	 headerViewModel.functions.readUser();
  // headerViewModel.functions.headerHandlerSwitcher();
	
}])