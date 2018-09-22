// SimpleCaptcha v1.0 © Anudeep Tubati under MIT License

function ChangeCaptcha() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
    // You can include special characters by adding them to the string above, for eg: chars += "@#?<>";
    
    var string_length = 6; // This is the length of the Captcha
    // ****** CAUTION ****** This just determines the string that'll be produced by the function. To make the Captcha 
    // field compatible with the updated size, you'll have to change the maxlength attribute in the HTML code

    var ChangeCaptcha = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        ChangeCaptcha += chars.substring(rnum,rnum+1);
    }
    
    document.getElementById('randomfield').value = ChangeCaptcha; // Final step which changes the field value to the Captcha produced
}

function check() { // Function which checks if the entered value is matching the Captcha
    if(document.getElementById('CaptchaEnter').value == document.getElementById('randomfield').value ) {
    
        window.open('https://www.google.co.in','_self');
        // Change the page to which the re-direction is to be done.
        // '_self' parameter makes the webpage open in the same tab. If this effect isn't desired, simply remove it.
        
    }
    else {
        alert('Please re-check the captcha'); // The alert message that'll be displayed when the user enters a wrong Captcha
    }
}
