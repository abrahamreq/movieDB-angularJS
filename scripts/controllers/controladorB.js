/**
 * Created by Abraham on 10/05/2015.
 */
angular.module("misPelisSeriesApp").controller("controladorB",["$scope",function($scope){
    //codigo
    $scope.$on("EventoHaciaAbajo",function(event,datos){
        alert(datos)
    });

    $scope.emitir = function () {
        $scope.$emit("EventoHaciaArriba", "Emit");
    };
}]);