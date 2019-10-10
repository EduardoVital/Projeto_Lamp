var glider = new Glider(document.querySelector('.glider'), {
    
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '#dots',
    draggable: true,
    scrollLock: true,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
    
  });


// Form animation  =======================================

  $('.cool').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('.cool').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });

// Scroll  =======================================

$('nav a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href');
    targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset
  }, 800);
});
