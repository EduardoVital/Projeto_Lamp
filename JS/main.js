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

  $('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('input').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });

  // textarea ================================================

  $('textarea').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('textarea').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });
  

