/**
 * Created by Abraham on 13/05/2015.
 */
angular.module("misPelisSeriesApp").controller("peliculasProximamenteCtrl",
    ["$scope","$http","$filter","Peliculas","$location",
        function ($scope,$http,$filter,Peliculas,$location) {

        $scope.peliculas = $filter("orderBy")(Peliculas.data.results, 'release_date');

        $scope.verDetalle = function ( id ) {
            $location.path('/peliculas/detalles').search({
                idPelicula:id
            });
        };

}]);