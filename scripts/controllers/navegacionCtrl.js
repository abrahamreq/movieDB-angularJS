/**
 * Created by Abraham on 13/05/2015.
 */
angular.module("misPelisSeriesApp").controller("navegacionCtrl", ["$scope","$routeSegment",function ($scope, $routeSegment) {
    //codigo
    $scope.rutaEsPeliculas = function () {
       return $routeSegment.startsWith("peliculas");
        
    };
    
    $scope.rutaEsSeries = function () {
        return $routeSegment.startsWith("series");
        
    };

    $scope.subtitulo = "Esto es un subtitulo";
}]);