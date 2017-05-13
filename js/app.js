document.addEventListener("DOMContentLoaded", function(){ 
    var nav = document.querySelector('nav');
    var lisMenue = nav.querySelectorAll('a');
    console.log(lisMenue);
    
    for(i=0; i < lisMenue.length; i++){
        lisMenue[i].addEventListener('click', function(){
            for(i=0; i < lisMenue.length; i++){
              lisMenue[i].classList.remove('active'); 
            }
            this.classList.add('active');  
            
        });
    }
});