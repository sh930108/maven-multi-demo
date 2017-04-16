/****
 * 高德地图,根据地址获取经纬度,并标点
 */
function codeAddress(address) {
    geocoder(address);
}

var map = new AMap.Map("locationMap", {
    resizeEnable: true
});

function geocoder(address) {

    AMap.service('AMap.Geocoder',function() {//回调函数
        //实例化Geocoder
        var geocoder = new AMap.Geocoder({
            //city: "010", //城市，默认：“全国”
            radius: 1000 //范围，默认：500
        });
        //地理编码,返回地理编码结果
        geocoder.getLocation(address, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                geocoder_CallBack(result);
            }
        });
    });

}
function addMarker(i, d) {
    var marker = new AMap.Marker({
        map: map,
        position: [ d.location.getLng(),  d.location.getLat()]
    });
    var infoWindow = new AMap.InfoWindow({
        content: d.formattedAddress,
        offset: {x: 0, y: -30}
    });
    marker.on("mouseover", function(e) {
        infoWindow.open(map, marker.getPosition());
    });
}
//地理编码返回结果展示
function geocoder_CallBack(data) {
    //地理编码结果数组
    var geocode = data.geocodes;
    for (var i = 0; i < geocode.length; i++) {
        //拼接输出html
        $('#lng').val(geocode[i].location.getLng());
        $('#lat').val(geocode[i].location.getLat());
        addMarker(i, geocode[i]);
    }
    map.setFitView();
}



function showMapByXY(lat,lng) {
    //地图加载
    var map = new AMap.Map("locationMap", {
        center:new AMap.LngLat(lng, lat),
        resizeEnable: true
    });

    //var map = new AMap.Map("container");
    //步骤一：初始化地图，本步骤可不实现
    //步骤二：通过AMap.service加载检索服务，加载的服务可以包括服务插件列表中一个或多个
    AMap.service(["AMap.Geocoder"], function() { //加载地理编码
        geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });
        //步骤三：通过服务对应的方法回调服务返回结果，本例中通过逆地理编码方法getAddress回调结果
        geocoder.getAddress(new AMap.LngLat(lng,lat), function(status, result){
            //根据服务请求状态处理返回结果
            if(status=='error') {
                alert("服务请求出错啦！ ");
            }
            if(status=='no_data') {
                alert("无数据返回，请换个关键字试试～～");
            }
            else {
                console.log(result);
            }
        });
    });
}
