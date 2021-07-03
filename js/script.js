// parallax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    })
    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 0.8 + '%)'
    })
    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 0.74 + '%)'
    })

    // kemampuan
    if (wScroll > $('.kemampuan').offset().top - 300) {
        $('.about .thumbnai').each(function (i) {
            setTimeout(function () {
                $('.about .thumbnai').eq(i).addClass('muncul');
            }, 80 * (i + 1));
        })

    }
    // navbar
    if (wScroll > 0) {
        // $('.navbar').toggleClass('navbar-light navbar-dark')
        $('.navbar').removeClass('bg-transparent')
        $('.navbar').addClass('bg-primary')
       

    }
    if (wScroll < 20) {
        // $('.navbar').toggleClass('bg-transparent')
        $('.navbar').removeClass('bg-primary')
        $('.navbar').addClass('bg-transparent')

    }

    


})

// tentang saya
$(window).on('load', function () {
    
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
    
   
})
