$(function(){ 
    var nav = document.querySelector('nav');
    var lisMenue = nav.querySelectorAll('a');
    
    for(i=0; i < lisMenue.length; i++){
        lisMenue[i].addEventListener('click', function(){
            for(i=0; i < lisMenue.length; i++){
              lisMenue[i].classList.remove('active'); 
            }
            this.classList.add('active');   
        });
    }
    
    var topElement = document.querySelector('.top');
    var mobile = window.matchMedia("screen and (max-width: 540px)");
        
     function stickyScroll(e){
        var topElement_height = getComputedStyle(topElement).height.split('px')[0];
        var nav_height = getComputedStyle(nav).height.split('px')[0];
         
        if( window.pageYOffset > (topElement_height - nav_height) / 2 && mobile.matches) {
            nav.classList.add('mobile-menu');
        }

        if( window.pageYOffset < (topElement_height - nav_height) / 2 && mobile.matches) {
            nav.classList.remove('mobile-menu');
        }   
    }
    window.addEventListener('scroll', stickyScroll);
    mobile.addListener(function(mobile){//może wprowadzić zmiany?
         if(mobile.matches){ 
             window.addEventListener('scroll', stickyScroll);
        }else{
            nav.classList.remove('mobile-menu');
        }
    });
    
    var $sections = $('.section'); //przerobić na Vanilla js?
    var $menu = $('div.top');
    var menu_height = $menu.outerHeight();
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
        
      $sections.each(function() {
        var top = $(this).offset().top - menu_height;
        var bottom = top + $(this).outerHeight();
    
        if (cur_pos >= top && cur_pos <= bottom) {
            $menu.find('a').removeClass('active');
            $sections.removeClass('active');
      
          $(this).addClass('active');
          $menu.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
       }
      });
    });
});