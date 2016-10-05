var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope) {
  $scope.user = items;
});

var items = [{
  name: 'name from items',
  name2: 'name 2 from items'
},{
  name: 'lentes',
  name2: 'chocolate'
},{
  name: 'cualquier cosa',
  name2: 'malteada'
}];