// JavaScript Document

$(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
		$('#dip table td').eq(3).text(device.model);
		$('#dip table td').eq(5).text(device.cordova);
		$('#dip table td').eq(7).text(device.platform);
		$('#dip table td').eq(9).text(device.version);
		$('#dip table td').eq(11).text(device.uuid);
	}.false);//ready device
	
});//document
