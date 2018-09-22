# SimpleCaptcha v1.0
Simple captcha without PHP.

Using just HTML and JS. It's __*vulnerable*__ (obviously), but it surely gets the things done for a simple project.

For a demo, you can watch the video I made **[right here](https://www.youtube.com/watch?v=2EsiEcu7v0A)**.

### Using this piece of program

There are **3** files in the directory, namely, captcha.(css, html, js).

1. Copy the CSS and JS files into your HTML directory (not necessary, but makes things _simpler_).
2. Include these both into your HTML file. (If you're not sure how to do so, check [captcha.html](captcha.html))
3. Add an input field with **ID** as "**randomfield**" (this will be the Captcha displayer).
4. Add an input field with **ID** as "**CaptchaEnter**" (this will be the field where user enters the captcha).
5. Add a button or anything you desire, so that, onclick, the function `check()` is called (this function checks the input and redirects the user to a page if it matches).
6. To change the page to which redirection takes place, go to the [JavaScript file](captcha.js)

This completes the process. Now you have your own simple Captcha without PHP!

To get in contact, Email me at anudeep.tumati99@gmail.com!

Any bug fixes in the code will be appreciated.
