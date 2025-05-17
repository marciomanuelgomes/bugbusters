$(document).ready(function(){

    // Progress bar
    let containerA = document.getElementById("circleA");
    
    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: { color:'#64DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 11);

            circle.setText(value); 
        }

    });

    let containerB = document.getElementById("circleB");
    
    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA'},
        to: { color:'#64DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 30);

            circle.setText(value); 
        }

    }); 


    let containerD = document.getElementById("circleD");
    
    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA'},
        to: { color:'#64DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 8);

            circle.setText(value); 
        }

    }); 

    
    let containerE = document.getElementById("circleE");
    
    let circleE = new ProgressBar.Circle(containerE, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA'},
        to: { color:'#64DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 15);

            circle.setText(value); 
        }

    }); 

    // Iniciar a animação ao chegar nesta secção
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();
    
        if(scroll > (dataAreaOffset.top - 500) && stop == 0 ){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleD.animate(1.0);
            circleE.animate(1.0);

            stop = 1;
        }
    }); 
    
    // Parallax
    setTimeout(function(){
        $('#data-area').parallax({imageSrc: 'Imagens/imagem.jpg'});
        $('#apply-area').parallax({imageSrc: 'Imagens/pattern.jpg'});    

    }, 250);

    //Filtro do Portfólio 
    $('.filter-btn').on('click', function(){
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active'); 

        if(type == 'design-btn'){
            eachBoxes('design', boxes)
        }else if(type == 'sites-btn'){
            eachBoxes('dev', boxes)
        }else if(type == 'desk-btn'){
            eachBoxes('desk', boxes)
        }
        else{
            eachBoxes('all', boxes)
        }
    });

    function eachBoxes(type, boxes){
        if(type == 'all'){
            $(boxes).fadeIn();
        } 
        else{
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow');
                }
                else{
                    $(this).fadeIn();
                }
            });
        }
    }

    // Scroll para Secções
    let navBtn = $('.nav-item');

    let bannerSection = $('#home-menu');
    let aboutSection = $('#about-menu');
    let servicesSection = $('#services-menu');
    let teamSection = $('#team-menu');
    let portfolioSection = $('#portfolio-menu');
    let contactSection = $('#contact-menu');
    
    let scrollTo = '';

    $(navBtn).click(function(){
        let btnId = $(this).attr('id');
        console.log(btnId);
        
        if(btnId == 'home-menu'){
            scrollTo = '#mainSlider';
        }else if(btnId == 'about-menu'){
            scrollTo = '#about-area';
        }else if(btnId == 'services-menu'){
            scrollTo = '#services-area';
        }else if(btnId == 'team-menu'){
            scrollTo = '#team-area';
        }else if(btnId == 'portfolio-menu'){
            scrollTo = '#portfolio-area';
        }else if(btnId == 'contact-menu'){
            scrollTo = '#contact-area';
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1000);
    });


});