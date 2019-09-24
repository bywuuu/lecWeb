$(document).ready(function () {
	$('.topbar_qr').hover(function () {
		$(this).find('img').show();
	}, function () {
		$(this).find('img').hide();
	});
	$('.nav_more').parent().hover(function () {
		$(this).find('.more_box').show();
	}, function () {
		$(this).find('.more_box').hide();
	});
	$(window).scroll(function (){
	    var $filter = $('.header');
        var $filterTop = $filter.offset().top;
		if ( $(window).width() > 1000 ) {
	      if ( $(window).scrollTop() > $filterTop ) {
			  $filter.addClass("fixed");
	      }
		  if ( $(window).scrollTop() < 10 ) {
			  $filter.removeClass("fixed");
	      }
		}
	});
	
	$('.pro_main').hover(
        function () {
			$(this).removeClass('pro_bbc').addClass('pro_b2c');
        },
        function () {
			$(this).removeClass('pro_b2c').addClass('pro_bbc');
        }
    );
	
    $('.close-im').bind('click',function(){
        $('.main-im').css("height","0");
        $('.im_main').hide();
        $('.open-im').show();
    });
    $('.open-im').bind('click',function(e){
        $('.main-im').css("height","232");
        $('.im_main').show();
        $(this).hide();
    });
    $('.go-top').bind('click',function(){
        $('body,html').animate({scrollTop:0},500);
    });
    $(".weixing-container").bind('mouseenter',function(){
        $('.weixing-show').show();
    })
    $(".weixing-container").bind('mouseleave',function(){
        $('.weixing-show').hide();
    });
	
	var doc=document,
    inputs=doc.getElementsByTagName('input'),
    supportPlaceholder='placeholder'in doc.createElement('input'),
    
    placeholder=function(input){
     var text=input.getAttribute('placeholder'),
     defaultValue=input.defaultValue;
     if(defaultValue===''){
        input.value=text;
     }
     input.onfocus=function(){
        if(input.value===text)
        {
            this.value='';
        }
      };
     input.onblur=function(){
        if(input.value===''){
            this.value=text;
        }
      };
  };
  
  if(!supportPlaceholder){
     for(var i=0,len=inputs.length;i<len;i++){
          var input=inputs[i],
          text=input.getAttribute('placeholder');
          if(input.type==='text'&&text){
             placeholder(input);
          }
      }
  }

  $('.fcallb_btn').click(function () {
    $('.modal-backdrop,.reg_box').show();
  })

  $('.all-close').click(function () {
    $('.modal-backdrop,.reg_box').hide();
  })

});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(navigator.userAgent) ) {
    window.location = '../../../www.lecshop.cn/mobile/m_index.html'/*tpa=http://www.lecshop.cn/mobile/m_index.html*/;
}