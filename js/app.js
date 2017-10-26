'use strict';
$(function(){
    var nav = document.querySelector('nav'),
        topElement = document.querySelector('.top'),
        mobile = window.matchMedia("screen and (max-width: 540px)");

     function stickyScroll(e){
        var topElement_height = getComputedStyle(topElement).height.split('px')[0],
            nav_height = getComputedStyle(nav).height.split('px')[0];

        if( window.pageYOffset > (topElement_height - nav_height) / 2 && mobile.matches) {
            nav.classList.add('mobile-menu');
        }

        if( window.pageYOffset < (topElement_height - nav_height) / 2 && mobile.matches) {
            nav.classList.remove('mobile-menu');
        }
    }
    window.addEventListener('scroll', stickyScroll);
    mobile.addListener(function(mobile){
         if(mobile.matches){
             window.addEventListener('scroll', stickyScroll);
        }else{
            nav.classList.remove('mobile-menu');
        }
    });

    var $sections = $('.section'),
        $menu = $('div.top'),
        menu_height = $menu.outerHeight();

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();

      $sections.each(function() {
        var top = $(this).offset().top - menu_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            $menu.find('a').removeClass('active');
            $sections.removeClass('active');

          $(this).addClass('active');
          $menu.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
       }
      });
    });
});
