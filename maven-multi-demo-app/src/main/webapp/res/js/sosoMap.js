/****
 * 根据经纬度定位
 * <script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp"></script>
 * <script  type="text/javascript" src="$!{request.getContextPath()}/res/js/sosoMap.js"></script>
 */
function showMapByXY(lat,lng) {
        var citylocation,map,marker = null;
    var center = new qq.maps.LatLng(lat,lng);
   map = new qq.maps.Map(document.getElementById('locationMap'),{
        center: center,
        zoom: 13
    });
    marker = new qq.maps.Marker({
        map: map,
        position: center
    })  
/**
   citylocation = new qq.maps.CityService({
        complete : function(results){
            map.setCenter(results.detail.latLng);
            //city.innerHTML = '?~I~@?~\??~M置: ' + results.detail.name;
            if (marker != null) {
                marker.setMap(null);
            }
            marker = new qq.maps.Marker({
                map: map,
                position: results.detail.latLng
            });
        }
    });
    citylocation.searchCityByLatLng(center);*/
}


/****
 * 根据地址定位
 * 
*/
 function codeAddress(address) {
	    var geocoder, map, marker = null;
	    var center = new qq.maps.LatLng(39.916527, 116.397128);
	    map = new qq.maps.Map(document.getElementById('locationMap'), {
	        center: center,
	        zoom: 13,
	    });

	    //地址和经纬度之间进行转换服务
	    geocoder = new qq.maps.Geocoder();
        //对指定地址进行解析
        geocoder.getLocation(address);
        //设置服务请求成功的回调函数
        geocoder.setComplete(function(result) {
            map.setCenter(result.detail.location);
            var marker = new qq.maps.Marker({
                map: map,
                position: result.detail.location
            });
            //获得经纬度
            var locations=result.detail.location;
            $('#lng').val(locations.lng);
            $('#lat').val(locations.lat);
            //点击Marker会弹出反查结果
            qq.maps.event.addListener(marker, 'click', function() {
                alert("坐标地址为： " + result.detail.location);
            });
        });
        //若服务请求失败，则运行以下函数
        geocoder.setError(function() {
            alert("出错了，请输入正确的地址！！！");
        });
 }



