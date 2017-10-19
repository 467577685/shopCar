/**
 * Created by 123 on 2017/10/16.
 */
var gulp = require("gulp");
var webserver = require("gulp-webserver");
var fs = require("fs");
var path = require("path");
var url = require("url");
gulp.task("server",function(){
    gulp.src("./")
        .pipe(webserver({
            livereload:true,
            directoryListing:true,
            middleware:function(req,res,next){
                var urlFile = url.parse(req.url);
                var file = path.join(__dirname,"Data",urlFile.query+".json");
                fs.exists(file,function(exists){
                    if(!exists){
                        res.writeHead(404,{
                            "Control-type":"text/json;charset=utf8"
                        });
                        res.end("页面不存在！！！");
                    }else{
                        fs.readFile(file,function(err,data){
                            if(err) return console.error(err);
                            res.writeHead(200,{
                                "Content-type":"text/json;charset=utf8",
                                "Access-Control-Allow-Origin":"*"
                            });
                            res.end(data.toString());
                        })
                    }

                })
            }
        }))
});