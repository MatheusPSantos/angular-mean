//AULA 2 - FILTROS

//módulo do angular
angular.module('Exe02', [])
// criando os próprios filtros
// primeiro parâmetro é o nome do filtro
// segundo parâmetro é uma função que recebe o retorno de outra função
.filter('reverseString', function(){
    return function(text) {
        if(text) {
            return text.split("").reverse().join("");
        }
    }
});