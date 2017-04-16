//显示两级到地市 by bowen.

function showBankLocation(province , city , town) {
	
	var loc	= new Location();
	var title	= ['省份' , '地级市'];
	$.each(title , function(k , v) {
		title[k]	= '<option value="">'+v+'</option>';
	})
	
	$('#loc_bk_province').append(title[0]);
	$('#loc_bk_city').append(title[1]);
	
	
	$('#loc_bk_province').change(function() {
		$('#loc_bk_city').empty();
		$('#loc_bk_city').append(title[1]);
		loc.fillOption('loc_bk_city' , '1,'+$('#loc_bk_province').val());
	})
	
	if (province) {
		loc.fillOption('loc_bk_province' , '1' , province);
		
		if (city) {
			loc.fillOption('loc_bk_city' , '1,'+province , city);
		}
		
	} else {
		loc.fillOption('loc_bk_province' , '1');
	}
		
}