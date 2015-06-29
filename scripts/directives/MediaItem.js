angular.module("misPelisSeriesApp").directive("mediaItem",["apiServices", function (apiService) {
    return {
        restrict:"AE",
        templateUrl: "views/MediaItem.html",
        scope: {
            datos: "=",
            alSeleccionar: "&"
        },
        link: function(scope) {
            scope.rutaImagen = function (ruta) {
                return apiService.obtenerrutaimagen(75,ruta)
            };

            scope.clickEnMedia = function (id) {
                scope.alSeleccionar({
                    mediaId: id
                });
            }
        }

    };
}]);