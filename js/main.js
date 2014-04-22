$('label').click( function() {
  if($(this).find('input').is(':checked')) {
    $(this).find('span').addClass('line'); 
  } else {
    $(this).find('span').removeClass('line');
  }
});
