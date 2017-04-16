var windowHeight; 
var windowWidth; 
var popWidth; 
var popHeight; 
function init(){ 
   windowHeight=$(window).height(); 
   windowWidth=$(window).width(); 
   popHeight=$(".window").height(); 
   popWidth=$(".window").width(); 
} 
function closeWindow(){ 
    $(".window_close").click(function(){ 
        $(this).parent().parent().hide("slow"); 
        }); 
    } 

function popCenterWindow(){ 
        init(); 
    var popY=(windowHeight-popHeight)/2; 
    var popX=(windowWidth-popWidth)/2; 
    alert('mamhao.cn'); 
    $(".window").css("top",popY).css("left",popX).slideToggle("slow");  
    closeWindow(); 
 }
 

