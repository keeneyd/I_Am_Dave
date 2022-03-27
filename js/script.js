$(document).ready(function(){

    //Smooth Scroll Functionality
    $('a.scroll').on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top}, "slow", function(){
                    window.location.hash = hash;
            });
        }
    });



    //Content Expansion with smooth scroll functionality
    $('.selectors li a, .selectors a, .expand a').on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('.content').not(hash).hide();

            $('div'+hash).slideToggle("fast", function(){
                if($(this).is(":visible")) {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top}, "slow", function(){
                            window.location.hash=hash;
                    });
                }

                else if($(this).is(":hidden")) {
                    var loc = $(this).prevUntil("div.stop",".page").attr('id');
                    $('html, body').animate({
                        scrollTop: $("#"+loc).offset().top}, "fast", function(){
                            window.location.hash=('#'+loc);
                    });
                }
            });
        }
    });
        
    //nav style adjustment as page scrolls off main entry
    $(window).scroll(function() {

        if($(document).scrollTop() > 50) {
            $('nav').addClass('dark');

        } else {
            $('nav').removeClass('dark');
        }
    });



    $('button.navbar-toggle').click(function(){

        $('nav').addClass('dark');
    });

    $('#myNavbar ul li a').click(function(){
        $('myNavbar').toggle();
    });





/* ---------------lightbox and slider----------------- */

$(".gallery a, .thumbnail a").click(function(){

    var hash=this.hash;

    $('.curtain').show();
    $(hash).slideDown(1000);

    $(hash + " .slider").cycle({

        fx: 'scrollHorz',
        next: '.next',
        prev: '.pre',
        timeout: 3000,
        pause: 2,
    });

    $('.close, .curtain').click(function(){
        $('.curtain').hide();
        $(hash).slideUp(500);
        $('.slider').cycle('stop');
    });

});

$('.cycle-slideshow').cycle({
    cleartype: false,
    fx: 'fade',
    pause: 10,

});



/* +++++++++++++++AJAX FUNCTION FOR FORM PROCESSING+++++++++++++++ */

$(function(){
    $('#contact-form').submit(function(e){
        e.preventDefault();
        var form=$(this);
        var post_url=form.attr('action');
        var post_data=form.serialize();
        $('#loader',form).html('<img src-"loader.gif"/>Please Wait....')
        $.ajax({
            type:'POST',
            url:post_url,
            data:post_data,
            error: function(){
                $(form).fadeOut(500,function(){
                    form.html('<h3>Oops, it looks like something has gone wrong with your submission. Please refresh the page and try again.').fadeIn();
                });
            },
            success: function(msg){
                $(form).fadeOut(500,function(){
                    form.html('<h3>Your message has been recorded, thank you for your input.').fadeIn();
                });
            }
        });

    });
});












/* -------------Typing Text Call----------- */
    $('#target').teletype({
        text: [
          'Dave Keeney',
          'A Leader',
          'A Critical Thinker',
          'An Adventurer',
          'An MBA',
          'A Firefighter',
          'Confident',
          'A Lifelong Learner',
          'Motivated',
          'A Data Disciple',
          'Passionately Curious',
          'A Problem Solver',
          'Looking for a Challenge',
          'Ready to Help',
        ]
      });

/* --------------End Typing Text Call----------- */

    });
