$(window).scroll(function(){
  
  win_height_padded = $(window).height() * 1.1;
  //alert(win_height_padded);

  $(".app-logo").each(function(){
  	if($(window).scrollTop() +  win_height_padded > $(this).offset().top){
      $(this).addClass("app-logo-anim");
    }
  }); 


});