angular.module('chollosApp', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
    	.when("/", {
    		controller: "listCtrl",
    		controllerAs: "listVM",
    		templateUrl: "listChollosTemplate.html",
    		resolve: {
    			// produce 500 miliseconds (0,5 seconds) of delay that should be enough to allow the server
    			//does any requested update before reading the chollos.
    			// Extracted from script.js used as example on https://docs.angularjs.org/api/ngRoute/service/$route
    			delay: function($q, $timeout) {
    			var delay = $q.defer();
    			$timeout(delay.resolve, 500);
    			return delay.promise;
    			}
    		}
    	})
    	.when("/insertChollo", {
    		controller: "cholloHandlerCtrl",
    		controllerAs: "cholloHandlerVM",
    		templateUrl: "cholloHandlerTemplate.html"
        })
        .when("/editChollo/:ID", {
        	controller: "cholloHandlerCtrl",
        	controllerAs: "cholloHandlerVM",
        	templateUrl: "cholloHandlerTemplate.html"
        })
        .when("/misChollos", {
        	controller: "listCtrl",
    		controllerAs: "listVM",
    		templateUrl: "listChollosTemplate2.html",
        })
        .when("/deleteChollo/:ID", {
        	controller: "cholloHandlerCtrl",
        	controllerAs: "cholloHandlerVM",
        	templateUrl: "cholloHandlerTemplate.html"
        })
        .when("/editUser", {
        	controller: "headerCtrl",
    		controllerAs: "headerVM",
    		templateUrl: "editarUsuario.html"
        })
        .when("/deleteUser", {
        	controller: "headerCtrl",
    		controllerAs: "headerVM",
    		templateUrl: "editarUsuario.html"
        })
        .when("/disponibles", {
        	controller: "listCtrl",
    		controllerAs: "listVM",
    		templateUrl: "listChollosTemplate.html",
        })
        .when("/likesDescendentes", {
        	controller: "listCtrl",
    		controllerAs: "listVM",
    		templateUrl: "listChollosTemplate.html",
        })
        
        
        ;
})