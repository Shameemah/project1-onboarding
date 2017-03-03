$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  //validate input
  $('#email, #name').on('keyup focus blur', function() {
    var currentEmailVal = $('#email').val();
    var currentNameVal = $('#name').val();
    var validPattern = $('#email').attr('pattern');
    if (currentEmailVal.match(validPattern) && currentNameVal.length !== 0) {
      $('#submit').addClass('active');
    } else {
      $('#submit').removeClass('active');
    }
  });
  
  $('#email').on('focus', function() {
    $('#input-email label').addClass('email-active');
    $('input[type="email"]').addClass('email-active');
  });
  
  $('#name').on('focus', function() {
    $('#input-name label').addClass('email-active');
    $('input[type="text"]').addClass('email-active');
  });
  
  $('h3').on('click', function() {
    $('#input-name label').addClass('email-active');
    $('#name').focus();
  });

  $('#email, h3').on('blur', function() {
    if($('#email').val().length === 0) {
      $('#input-email label').removeClass('email-active');
      $('input[type="email"]').removeClass('email-active');
    }
  });
  
  $('#name, h3').on('blur', function() {
    if($('#name').val().length === 0) {
      $('#input-name label').removeClass('email-active');
      $('input[type="text"]').removeClass('email-active');
    }
  });
  
  //Form submit action
  $( "#register-form" ).submit(function( event ) {
    event.preventDefault();
    $("#submit").remove();
    $("form").remove();
    thankYouMessage();
  });
  
  //reset content when form is reloaded
  resetForms();
  
  //function to show thank you message to user
  function thankYouMessage() {
    var message = 'Thank You!';
    var gratitude='<ul><li id="thankyou-message">You are officially a logophile :D</li></ul>';
    $('h3').text(message);
    $('h3').css('background-color', 'rgba(170, 102, 68, 0.6)');
    $('#register').append(gratitude);
    $('#thankyou-message').addClass('FontBounce');
  }
  
  function resetForms() {
    document.forms['register-form'].reset();
  }
});



