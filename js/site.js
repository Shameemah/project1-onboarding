$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

 //email variables
  var emailId = '#email';
  var emailLabel = '#input-email label';
  var typeEmail = 'input[type="email"]';
  
  //email variables
  var nameId = '#name';
  var nameLabel = '#input-name label';
  var typeText = 'input[type="text"]';
  
  //email variables
  var numberId = '#number';
  var numberLabel = '#input-number label';
  var typeTel = 'input[type="tel"]';
  
  
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  //Function Calls
  addClassFocus(emailId, emailLabel, typeEmail);
  addClassFocus(nameId, nameLabel, typeText);
  addClassFocus(numberId, numberLabel, typeTel);
  addClassClick('h3', nameLabel, nameId);
  removeClassBlur(emailId, emailLabel, typeEmail);
  removeClassBlur(nameId, nameLabel, typeText);
  removeClassBlur(numberId, numberLabel, typeTel);
  resetForms();
  
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
  
  //Form submit action
  $( "#register-form" ).submit(function( event ) {
    event.preventDefault();
    $("#submit").remove();
    $("form").remove();
    thankYouMessage();
  });

  //function for addCLass/focus
  function addClassFocus(element, impactedElement, affectedElement) {
    $(element).on('focus', function() {
      $(impactedElement).addClass('email-active');
      $(affectedElement).addClass('email-active');
    });
  }
  
  //function for addClass/click
  function addClassClick(element, impactedElement, affectedElement) {
    $(element).on('click', function() {
      $(impactedElement).addClass('email-active');
      $(affectedElement).focus();
    });
  }
  
  //function for removeClass/blur
  function removeClassBlur(element, impactedElement, affectedElement) {
    $(element).on('blur', function() {
      if($(element).val().length === 0) {
        $(impactedElement).removeClass('email-active');
        $(affectedElement).removeClass('email-active');
      }
    });
  }
  
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



