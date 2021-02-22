angular.module('chollosApp')
.factory("chollosFactory", ['$http',function($http){
	var url = 'https://localhost:8443/chollosDAO/rest/chollos/';
    var chollosInterface = {
    	getChollos: function(){
    		return $http.get(url)
    			.then(function(response){
    				return response.data;
    			});
    	},
    	getChollo: function(id){
    		var urlid = url + id;
            return $http.get(urlid)
            	.then(function(response){
            		return response.data;
         		});
    	},
    	misChollos: function(){
    		var urlid = url + 'misChollos';
            return $http.get(urlid)
            	.then(function(response){
            		return response.data;
         		});
    	},
    	putChollo : function(chollo){
    		var urlid = url+chollo.id;
            return $http.put(urlid, chollo)
            	.then(function(response){
      				 return response.status;
  				});                   
    	},
    	postChollo:  function(chollo){
    		return $http.post(url,chollo)
            	.then(function(response){
            		return response.status;
     			});
    	}, 
        deleteChollo : function(id){
        	var urlid = url+id;
            return $http.delete(urlid)
            	.then(function(response){
            		return response.status;
            	});
        }, 
        incrementarLike : function(id){
        	//console.log("Entra en Factory");
        	var urlid = url+'anadirlike/'+id;
            return $http.put(urlid)
            	.then(function(response){
            		//console.log("Entra en function");
            		return response.status;
            	});
        }, 
        decrementarLike : function(id){
        	//console.log("Entra en Factory");
        	var urlid = url+'disminuirlike/'+id;
            return $http.put(urlid)
            	.then(function(response){
            		//console.log("Entra en function");
            		return response.status;
            	});
        },
        chollosDisponibles : function(){
        	//console.log("Entra en Factory");
        	var urlid = url+'mostrarDisponibles';
            return $http.get(urlid)
            	.then(function(response){
            		//console.log("Entra en function");
            		return response.data;
            	});
        },
        chollosDes : function(){
        	//console.log("Entra en Factory");
        	var urlid = url+'chollosDescendente';
            return $http.get(urlid)
            	.then(function(response){
            		//console.log("Entra en function");
            		return response.data;
            	});
        },
        busqueda : function(title){
        	//console.log("Entra en Factory");
        	var urlid = url+'buscar/'+title;
            return $http.get(urlid)
            	.then(function(response){
            		//console.log("Entra en function");
            		return response.data;
            	});
        },
        filtrarPorLikes : function(numero){
        	//console.log("Entra en Factory");
        	var urlid = url+'filtrarLike/'+numero;
            return $http.get(urlid)
            	.then(function(response){
            		//console.log("Entra en function");
            		return response.data;
            	});
        }
    }
    return chollosInterface;
}])