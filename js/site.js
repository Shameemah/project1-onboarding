$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  $('#email').on('keyup focus blur', function() {
  	var currentValue = $(this).val();
   	var validPattern = $(this).attr('pattern');
   	if (currentValue.match(validPattern)) {
   		$('#submit').addClass('active');
   	} else {
   		$('#submit').removeClass('active');
   	}
  });
  
  $('#email').on('focus', function() {
  	$('#input-email label').addClass('email-active');
  });
  
  $('#email').on('blur', function() {
  	$('#input-email label').removeClass('email-active');
  });
});