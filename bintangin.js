/***********************************************************
* #### Bintangin.js v0.01 ####
* Coded by Ican Bachors 2016.
* http://ibacor.com/labs/binjanginjs
* Updates will be posted to this site.
***********************************************************/
$.fn.bintangin=function(e,f,g){$(this).each(function(c){var d=$(this).attr("id"),gejora=$('#'+d).data("bintangin");$('#'+d).html('<i class="bintang fa fa-star" data-bintang="1"></i><i class="bintang fa fa-star" data-bintang="2"></i><i class="bintang fa fa-star" data-bintang="3"></i><i class="bintang fa fa-star" data-bintang="4"></i><i class="bintang fa fa-star" data-bintang="5"></i><div class="message">'+gejora+' '+g+'</div>');$('#'+d+' .bintang').each(function(a){if(a<gejora){$(this).addClass("bintangin")}});$("#"+d+" .bintang").click(function(){$("#"+d+" .bintang").removeClass("bintangin");var b=$(this).data("bintang");$("#"+d+" .bintang").each(function(a){if(a<b){$(this).addClass("bintangin")}});$.post(e,{postid:d,rate:b,visitor:f}).always(function(a){$("#"+d+" .message").html(b+' '+g)})})})}
