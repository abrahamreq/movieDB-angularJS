/**
 * Created by Abraham on 12/05/2015.
 */
angular.module("misPelisSeriesApp").controller("PeliculasCtrl", ["$scope","$routeSegment", function ($scope,$routeSegment) {
    $scope.rutaEsProximamente = function () {
        return $routeSegment.startsWith("peliculas.proximamente");
    };

    $scope.rutaEsCartelera = function () {
        return $routeSegment.startsWith("peliculas.cartelera");
    };


    //codigo
}]);