/**
 * Created by Abraham on 02/06/2015.
 */
angular.module("misPelisSeriesApp").controller("peliculasDetallesCtrl",["$scope","Pelicula","apiServices",
    function($scope, Pelicula,apiService){
        $scope.pelicula = Pelicula.data;

        $scope.rutaImagen = function (ruta) {
            return apiService.obtenerrutaimagen(150,ruta);
        };
        }]);
