$(document).ready(function () {
	$('.icon_nav').click(function(){
	    $('.modal-backdrop').show();
	    $('.navs').show();
    });
    $('.modal-backdrop').click(function(){
	    $(this).hide();
	    $('.navs').hide();
    });
});