define(function(require,exports,module){
    
    seajs.config({
        base: "./js/",
        alias: {
            "jquery":"jquery.min"
        },
        map: [[/^(.*\.(?:css|js))(.*)$/i, '$1?v=20160201']]
    });

    seajs.use("jquery",function(){
        $(function(){

        });
    });
});