/**
 * Created by Abraham on 06/05/2015.
 */

angular.module("misPelisSeriesApp").controller("indexCtrl",["$scope",function($scope){
    //codigo
    $scope.broad = function(){
    $scope.$broadcast("EventoHaciaAbajo","broadcast");
        };

    $scope.$on("EventoHaciaArriba", function (event, datos) {
        alert(datos);
    });
}]);




/* angular.module("misPelisSeriesApp").controller("indexCtrl",["$scope",function($scope){
    //codigo
    $scope.$watch(
        function () {
            return $scope.valorCheckbox;
        },
        function (valorNuevo, valorAntiguo) {
            if(valorNuevo != undefined && valorAntiguo != undefined) {
                alert("Valor nuevo" + valorNuevo + " | valor antiguo " + valorAntiguo)
            }
        }
    );
}]); */