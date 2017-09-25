/* eslint-disable */
//this is to solve the issue that when clicking outside of menu bar, we want to close it 
//automatically. Note sure why bootstrap doen't provide this functionality by default
 jQuery('body').bind('click', function(e) {
        if(jQuery(e.target).closest('.navbar').length == 0) {
            // click happened outside of .navbar, so hide
            var opened = jQuery('.navbar-collapse').hasClass('collapse in');
            if ( opened === true ) {
                jQuery('.navbar-collapse').collapse('hide');
            }
        }
 })