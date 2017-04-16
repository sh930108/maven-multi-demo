//通过地址展示地图并获得经纬度
/***
 * 
 * @param province
 * @param city
 * @param district
 * @param addrdetail
 * <!----<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.3"></script>
<script type="text/javascript" src="$!{request.getContextPath()}/res/js/map.js"></script>--->
 */
function showMap(province,city,district,addrdetail){
    var map = new BMap.Map("locationMap");
    map.centerAndZoom(city, 10);
    map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

    map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
    map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
    map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开
	
	var localSearch = new BMap.LocalSearch(map);
    localSearch.enableAutoViewport(); //允许自动调节窗体大小
	//获取经纬度
    map.clearOverlays();//清空原来的标注
    var keyword=province+city+district+addrdetail;
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0);
        map.centerAndZoom(poi.point, 13);
        var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
        map.addOverlay(marker);
        var content = keyword + "<br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
        var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
        marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
    });
    localSearch.search(keyword);
   }
/***
 * 用经纬度设置地图中心点
 * @param lng
 * @param lat
 * <div id="locationMap"></div> //地图
 */
function showMapByXY(lng,lat){
    var map = new BMap.Map("locationMap");
    map.centerAndZoom(new BMap.Point(lng,lat),15);
    map.enableScrollWheelZoom(true);//启用滚轮放大缩小，默认禁用
	map.clearOverlays(); //清空原来的标注
	var new_point = new BMap.Point(lng,lat);
	var marker = new BMap.Marker(new_point);  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	map.panTo(new_point);      
}   