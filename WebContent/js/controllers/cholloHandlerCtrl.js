angular.module('chollosApp')
.controller('cholloHandlerCtrl', ['chollosFactory','usersFactory','$routeParams','$location',
			function(chollosFactory,usersFactory,$routeParams,$location){
	var cholloHandlerViewModel = this;
    cholloHandlerViewModel.chollo={};
   	cholloHandlerViewModel.functions = {
   		where : function(route){
   			return $location.path() == route;
   		},
		readUserNameEmail : function() {
			usersFactory.getUser()
				.then(function(response){
					cholloHandlerViewModel.chollo.name= response.name;
					cholloHandlerViewModel.chollo.email= response.email;
					console.log("Reading user with id: ",response.id," Response: ", response);
    			}, function(response){
    				console.log("Error reading user data");
    			})
		},
		readChollo : function(id) {
			chollosFactory.getChollo(id)
				.then(function(response){
					console.log("Reading chollo with id: ", id," Response: ", response);
					cholloHandlerViewModel.chollo = response;
				}, function(response){
					console.log("Error reading chollo");
					$location.path('/');
				})
		},
		updateChollo : function() {
			chollosFactory.putChollo(cholloHandlerViewModel.chollo)
				.then(function(response){
					console.log("Updating chollo with id:",cholloHandlerViewModel.chollo.id," Response:", response);
    			}, function(response){
    				console.log("Error updating chollo");
    			})
		},	
		createChollo : function() {
	        chollosFactory.postChollo(cholloHandlerViewModel.chollo)
				.then(function(response){
					console.log("Creating chollo. Response:", response);
    			}, function(response){
    				console.log("Error creating the chollo");
    			})
		},
		deleteChollo : function(id) {
			chollosFactory.deleteChollo(id)
				.then(function(response){
					console.log("Deleting chollo with id:",id," Response:", response);
				}, function(response){
					console.log("Error deleting chollo");
				})
		},
		
		cholloHandlerSwitcher : function(){
			if (cholloHandlerViewModel.functions.where('/insertChollo')){
				console.log($location.path());
				cholloHandlerViewModel.functions.createChollo();
			}
			else if (cholloHandlerViewModel.functions.where('/editChollo/'+cholloHandlerViewModel.chollo.id)){
				console.log($location.path());
				cholloHandlerViewModel.functions.updateChollo();
			}
			else if (cholloHandlerViewModel.functions.where('/deleteChollo/'+cholloHandlerViewModel.chollo.id)){
				console.log($location.path());
				cholloHandlerViewModel.functions.deleteChollo(cholloHandlerViewModel.chollo.id);
			}
			else 
				 
				
				console.log($location.path());
			
			
			$location.path('/');
		}
	}
   	console.log("Entering cholloHandlerCtrl with $routeParams.ID=",$routeParams.ID);
   	if ($routeParams.ID==undefined) cholloHandlerViewModel.functions.readUserNameEmail();
   	else cholloHandlerViewModel.functions.readChollo($routeParams.ID);
}]);