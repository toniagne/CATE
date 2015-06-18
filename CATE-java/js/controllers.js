
var App = angular.module('CATe', []);
  
App.controller('Funcoes', function($scope, $http) {

$scope.unidades = function(tipo) {  
	 
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/unidades')
               .success(function(data) {
                      
                }) 
               .error(function(data) {
                
               })
               .then(        
                function(res){  
                    $scope.unidades  = res.data; 
                });   
}
$scope.detalhesvaga = function(itens){ 
	$scope.itensvaga = itens;
}

$scope.programacao = function(tipo) {  
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/quinzenal')
               .success(function(data) {
                     
                }) 
               .error(function(data) {
                
               })
               .then(        
                function(res){  
                    $scope.programacao  = res.data; 
                });   
}

$scope.eventos = function(tipo) {  
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/eventos')
               .success(function(data) {
                     
                }) 
               .error(function(data) {
                
               })
               .then(        
                function(res){  
                    $scope.eventos  = res.data; 
                });   
}

$scope.vagasdiretas = function(tipovaga) {  

  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/vagas', {params: {tipo: tipovaga}})
               .success(function(data) {
                     
                }) 
               .error(function(data) {
                
               })
               .then(        
                function(res){  
                    $scope.vagasdiretas  = res.data; 
                });   
}


});
 

 
 