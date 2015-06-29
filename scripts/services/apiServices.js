/**
 * Created by Abraham on 19/05/2015.
 */
angular.module("misPelisSeriesApp").service("apiServices",["$http","configuracion",function ($http,configuracion) {
    this.consultaApi = function (servicio) {
        return $http
            .get("https://api.themoviedb.org/"+ configuracion.apiVersion + "/"+ servicio +
            "?" + configuracion.apiKey + "&language=es");
    };

    this.obtenerrutaimagen = function(tamano, ruta ) {
        return ruta == null ? null : configuracion.rutaimagenAPI + tamano + ruta;
    };

}]);