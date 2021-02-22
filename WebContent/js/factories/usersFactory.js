angular.module('chollosApp')
.factory('usersFactory',['$http', function($http){
	var url = 'https://localhost:8443/chollosDAO/rest/users/';
    var usersInterface = {
    	getUser : function(){
    		url = url ;
            return $http.get(url)
              	.then(function(response){
        			 return response.data;
               	});
    	},
    	putUser : function(user){
    		var urlid = url;
            return $http.put(urlid, user)
            	.then(function(response){
      				 return response.status;
  				});
    	}, 
        deleteUser : function(){
        	var urlid = url;
            return $http.delete(urlid)
            	.then(function(response){
            		return response.status;
            	});
        }, 
        createUsuario : function(user){
    		url = url ;
            return $http.post(url, user)
          		.then(function(response){
          			return response.data;
          		});
    	}			
    }
    return usersInterface;
}])