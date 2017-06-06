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
    
    var sections = $('.section');
    var menu = $('div.top');
    var menu_height = menu.outerHeight();
    
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
        
      sections.each(function() {
        var top = $(this).offset().top - menu_height;
        var bottom = top + $(this).outerHeight();
    
        if (cur_pos >= top && cur_pos <= bottom) {
            menu.find('a').removeClass('active');
            sections.removeClass('active');
      
          $(this).addClass('active');
          menu.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
       }
    });
    });
});