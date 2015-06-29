/**
 * Created by Abraham on 08/06/2015.
 */
angular.module("misPelisSeriesApp").directive("generos",["$compile", function ($compile) {
    return {
        restrict: "AE",
        scope: {
            coleccion: "="
        },
        link: function (scope, element) {

            var vista = "<div class='caja-generos'>";

            for(var f= 0, F = scope.coleccion.length ; f<F; f++) {
                vista += "<span class='label label-primary'>" + scope.coleccion[f].name + "</span> ";
            }

            vista += "</div>";

            var nuevoElemento = angular.element(vista);
            var nuevoElementoCompilado = $compile(nuevoElemento)(scope);

            element.replaceWith(nuevoElementoCompilado);

        }

    };
}]);