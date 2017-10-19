/**
 * Created by 123 on 2017/10/18.
 */
app.directive("shop",function(){
    return {
        templateUrl:"App/Views/temp/_shopping.html",
        scope:{
            data:"=data",
            index:"@index"
        },
        controller:"shoppingItemController"
    }
});