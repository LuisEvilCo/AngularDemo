(function(){
   var app = angular.module("app", ["xeditable"]);


    app.run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });

app.controller('Ctrl', function($scope) {
  $scope.user = {
    name: 'not so awesome user'
    console.log($scope.user);
  };  
});

})();