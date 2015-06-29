/**
 * Created by Abraham on 05/05/2015.
 */

angular.module("misPelisSeriesApp",["ngRoute","route-segment","view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider","$routeProvider", function ($routeSegmentProvider,$routeProvider) {
    $routeSegmentProvider.when("/peliculas","peliculas");
    $routeSegmentProvider.when("/peliculas/proximamente","peliculas.proximamente");
    $routeSegmentProvider.when("/peliculas/cartelera","peliculas.cartelera");
    $routeSegmentProvider.when("/peliculas/detalles","peliculas.detalles");
    $routeSegmentProvider.when("/series","series");
    $routeProvider.otherwise({
        redirectTo: "/peliculas/proximamente"
    });


    $routeSegmentProvider.segment("peliculas",{
        controller: "PeliculasCtrl",
        templateUrl: "views/peliculas.html"
    });

    $routeSegmentProvider.within("peliculas").segment("proximamente", {
        controller: "peliculasProximamenteCtrl",
        templateUrl: "views/peliculasProximamente.html",
        resolve: {
            Peliculas: ["apiServices", function (apiServices) {
                return apiServices.consultaApi("movie/upcoming");
            }]
        }

    });

    $routeSegmentProvider.within("peliculas").segment("detalles", {
        controller:"peliculasDetallesCtrl",
        templateUrl:"views/peliculasDetalles.html",
        resolve: {
            Pelicula: ["apiServices","$routeParams", function (apiServices,$routeParams) {
                return apiServices.consultaApi("movie/" + $routeParams.idPelicula );
            }]
        }
    });

    $routeSegmentProvider.within("peliculas").segment("cartelera", {
        controller: "peliculasCarteleraCtrl",
        templateUrl: "views/peliculasCartelera.html",
        resolve: {
            Peliculas: ["apiServices", function (apiServices) {
                return apiServices.consultaApi("movie/now_playing");
            }]
        }
    });

    $routeSegmentProvider.segment("series",{
        controller: "seriesCtrl",
        templateUrl: "views/series.html"
    });
}]);