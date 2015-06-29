/**
 * Created by Abraham on 20/05/2015.
 */
angular.module("misPelisSeriesApp").filter("fechaEstreno", function() {

    return function(dato){
        return "Se estrena el " + dato;
    };

});