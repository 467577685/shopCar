/**
 * Created by 123 on 2017/10/18.
 */
app.controller("shoppingItemController",function($scope){
    $scope.del = function(index){
        $scope.$emit("del",index);
    };
    $scope.check = function(index){
        $scope.$emit("check",index);
    };
    $scope.flag = false;
    $scope.all = function(){
        $scope.flag = !$scope.flag;
    };
    $scope.countItem = function(flag,index){
        if(flag == '+'){
            $scope.data[index].count += 1;
        }else{
            if($scope.data[index].count <= 1) return;
            $scope.data[index].count -= 1;
        }
        $scope.$emit("countItem");
    };


});