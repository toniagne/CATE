angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', ['$http', '$scope', function($http, $scope) { 
	     
       
}])

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal) {
    
 })

.controller('ChatsCtrl', function($scope, $http) {

   
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $http) {
   
});
