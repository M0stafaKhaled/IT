const bar = document.querySelector('.menu-bar');
bar.addEventListener("click", ()=>{

    bar.classList.toggle('is-active');
})

var nav = document.getElementById('nav');

    window.addEventListener("scroll" , function(){


                
        if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) 
            nav.style.padding ="40px";
            else
            nav.style.padding ="20px"
        
    });
