/**
 * Created by 123 on 2017/10/15.
 */
app.factory("ajaxServer",function($http,$q){
    server = {
        ajax:function(url){
            var defer = $q.defer();
            $http({
                url:url,
                method:"get"
            }).then(function(result){
                defer.resolve(result);
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        }
    };
    return server;
});