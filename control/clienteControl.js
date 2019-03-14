var app = angular.module('clienteModule',[]);
app.controller('clienteControl',function($scope){
    $scope.clientes = [{'codigo':'1','nome':'Carlos','cargo':'Professor','endereco':'Rua xxx','cidade':'UDIA','cep':'48400000','pais':'Brasil','telefone':'9884838383','fax':'2323232323232323'},
    {'codigo':'2','nome':'Jose','cargo':'Analista','endereco':'Rua xxx','cidade':'UDIAa','cep':'48400000','pais':'Brasil','telefone':'9884838383','fax':'2323232323232323'}
    ]; 
    $scope.salvar = function(){
        $scope.clientes.push($scope.cliente);
        $scope.novo();
    }
    $scope.pesquisar = function(){

    }
    $scope.excluir = function(){
        $scope.clientes.splice($scope.cliente.indexOf($scope.cliente),1);
        $scope.novo();
    }
    $scope.novo = function(){
        $scope.cliente = "";
    }
    $scope.seleciona = function(cliente){
        $scope.ciente = clinte;
    }

}); 