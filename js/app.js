(function(){
    var app = angular.module('app',[]);

    app.controller('PageController', function(){
        this.products = items;
    });

    var items = [{
        name : 'Daniel Perez',
        description : 'description number 1'
    },{
        name : 'item2',
        description : 'description number 2' 
    }]

})();