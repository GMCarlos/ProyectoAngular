angular.module('chollosApp')
.controller('listCtrl', ['chollosFactory','$routeParams','$location',function(chollosFactory,$routeParams,$location){
    var listViewModel = this;
    listViewModel.chollos=[];
    listViewModel.busca=[];
    listViewModel.buscaLike=[];
    listViewModel.mischollos=[];
    listViewModel.functions = {
    		where : function(route){
       			return $location.path() == route;
       		},
    	readChollos : function() {
    		chollosFactory.getChollos()
				.then(function(response){
	    			console.log("Reading all the chollos: ", response);
	    			listViewModel.chollos = response;
	    		}, function(response){
	    			console.log("Error reading chollos");
	    		})
		},
		
		sumarLikeChollo : function(id) {
			chollosFactory.incrementarLike(id)
				.then(function(response){
		
					//console.log("Updating chollo with id:",cholloHandlerViewModel.chollo.id," Response:", response);
					listViewModel.functions.readChollos();
    			}, function(response){
    				console.log("Error aumentando likes");
    			})
		},
		restarLikeChollo : function(id) {
			chollosFactory.decrementarLike(id)
				.then(function(response){
		
					//console.log("Updating chollo with id:",cholloHandlerViewModel.chollo.id," Response:", response);
					listViewModel.functions.readChollos();
    			}, function(response){
    				console.log("Error aumentando likes");
    			})
		},
		
		misChollos : function() {
		chollosFactory.misChollos()
		.then(function(response){
			console.log("Reading all the chollos: ", response);
			listViewModel.mischollos = response;
		}, function(response){
			console.log("Error reading chollos");
		})
},
buscar : function() {
	chollosFactory.busqueda(listViewModel.busca)
	.then(function(response){
		console.log("Reading  chollos buscados: ", response);
		listViewModel.chollos = response;
	}, function(response){
		console.log("Error reading chollos");
	})
},

buscarLikes : function() {
	chollosFactory.filtrarPorLikes(listViewModel.buscaLike)
	.then(function(response){
		console.log("Reading  chollos buscados: ", response);
		listViewModel.chollos = response;
	}, function(response){
		console.log("Error reading chollos");
	})
},

						chollosDisp : function() {
							chollosFactory.chollosDisponibles().then(
									function(response) {
										console.log(
												"Reading all the chollos: ",
												response);
										listViewModel.chollos = response;
									}, function(response) {
										console.log("Error reading chollos");
									})
						},
						
						chollosDesc : function() {
							chollosFactory.chollosDes().then(
									function(response) {
										console.log(
												"Reading all the chollos: ",
												response);
										listViewModel.chollos = response;
									}, function(response) {
										console.log("Error reading chollos");
									})
						},



	cholloHandlerSwitcher : function(){
	if (listViewModel.functions.where('/')){
		console.log($location.path());
		listViewModel.functions.readChollos();
	}
	else if (listViewModel.functions.where('/misChollos')){
		console.log($location.path());
		listViewModel.functions.misChollos();
	}
	else if (listViewModel.functions.where('/disponibles')){
		console.log($location.path());
		listViewModel.functions.chollosDisp();
	}
	else if (listViewModel.functions.where('/likesDescendentes')){
		console.log($location.path());
		listViewModel.functions.chollosDesc();
	}
}
    
    }
   listViewModel.functions.cholloHandlerSwitcher();
}]);