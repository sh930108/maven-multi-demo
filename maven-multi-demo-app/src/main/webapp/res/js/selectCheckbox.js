
/**全选/全不选 checkbox
 * #foreach($data in $dataList)	
 * <input type="checkbox" id="checkbox-01" name="templeIds" value="$data.get("template_id")"/>
 * 	#end
 * <input type="checkbox" id="checkbox-02" name="checkbox02" onclick="javascript:selectCheckboxAll();"/>
 * 
 * ***/
function selectCheckboxAll(){
    var checkboxs=$("input[name='templeIds']"); 
    if ($("#checkbox-02").attr("checked")) {  
       for(var i=0;i<checkboxs.length;i++){
        checkboxs[i].checked='checked';
       }
    } else { 
      for(var i=0;i<checkboxs.length;i++){
         checkboxs[i].checked=''; 
      }
    } 
}