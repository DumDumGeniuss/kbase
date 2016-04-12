KBase.controller('indexPageCtrl', ['$scope',function($scope){


  $(window).scroll(function(){
    
    win_height_padded = $(window).height() * 1.1;
  
    $(".app-logo").each(function(){
    	if($(window).scrollTop() +  win_height_padded > $(this).offset().top){
        $(this).addClass("app-logo-anim");
      }
    });
     
  });


}]);
