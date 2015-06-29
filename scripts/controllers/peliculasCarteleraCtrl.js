/**
 * Created by Abraham on 13/05/2015.
 */
angular.module("misPelisSeriesApp").controller("peliculasCarteleraCtrl", ["$scope","Peliculas","$location", function ($scope,Peliculas,$location) {

    $scope.peliculas = Peliculas.data.results;

    $scope.verDetalle = function ( id ) {
        $location.path('/peliculas/detalles').search({
            idPelicula:id
        });
    };

    //codigo
}]);

/*
$http
    .get("https://api.themoviedb.org/3/movie/now_playing?api_key=98eeaf93954a669cd5ed603e58896f28&language=es")*/