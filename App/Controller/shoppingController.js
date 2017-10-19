/**
 * Created by 123 on 2017/10/18.
 */
app.controller("shoppingController", ["$scope", "shoppingServer", function ($scope, shoppingServer) {
    shoppingServer.getData().then(function (result) {
        $scope.data = result.data;
        sumFn();
    });
    $scope.$on("del", function (event, index) {
        $scope.data.splice(index, 1);
        sumFn();
    });
    $scope.$on("check", function (event, index) {
        $scope.data[index].state = !$scope.data[index].state;
        var count = 0;
        for (var i = 0; i < $scope.data.length; i++) {
            if ($scope.data[i].state) {
                count++;
            } else {
                $scope.flag = false;
            }
        }
        if (count == $scope.data.length) {
            $scope.flag = true;
        }
        sumFn();
    });
    $scope.flag = false;
    $scope.all = function () {
        $scope.flag = !$scope.flag;
        for (var i = 0; i < $scope.data.length; i++) {
            $scope.data[i].state = $scope.flag;
        }
        sumFn();

    };
    $scope.$on("countItem", function (event) {
        sumFn();
    });
    function sumFn() {
        $scope.sumPrice = 0;
        $scope.sum = 0;
        $scope.data.forEach(function (item, index) {
            if (item.state) {
                $scope.sumPrice += item.price * item.count;
                $scope.sum += item.count
            }
        })
    }


}]);