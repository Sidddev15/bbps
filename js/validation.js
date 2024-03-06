$(document).ready(function(){
      $('.mobileValidation').on('input', function(event) {
            var thismobile = $(this);
            var mobileerror = 0;
            var numericValue = thismobile.val().replace(/\D/g, ''); // Remove non-numeric characters
        
            // Update the input field value with the numeric value
            thismobile.val(numericValue);
        
            if (!numericValue) {
                // If the field is empty after removing non-numeric characters, don't perform any validation
                return;
            }
        
            if (numericValue.length !== 10) {
                mobileerror++;
            }
        
            if (mobileerror !== 0) {
                // If there are errors, add the 'has-error' class
                thismobile.parent('div').addClass('has-error');
            } else {
                // Otherwise, remove the 'has-error' class
                thismobile.parent('div').removeClass('has-error');
            }
        });
        
        $('.mobileValidation').on('keypress', function(event) {
            // Get the pressed key code
            var keyCode = event.which ? event.which : event.keyCode;
        
            // Allow only numeric keys (0-9) and specific control keys
            if (keyCode < 48 || keyCode > 57) {
                // Allow backspace, delete, arrow keys, and navigation keys
                if (keyCode !== 8 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39 && keyCode !== 35 && keyCode !== 36) {
                    // Prevent the default action of the event
                    event.preventDefault();
                }
            }
        });
        
})