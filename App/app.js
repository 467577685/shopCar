/**
 * Created by 123 on 2017/10/17.
 */
var app = angular.module("myApp",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("shopping",{
            url:"/shopping",
            templateUrl:"App/Views/shopping.html",
            controller:"shoppingController"
        });
    $urlRouterProvider.otherwise("/shopping");

});