const { clear } = require("console");

describe('Actions - Demo', function() {

    it('Handling Alert', function() {
      browser.waitForAngularEnabled(false)
      browser.get('https://www.irctc.co.in/eticketing/errors.html#');
      browser.driver.manage().window().maximize();
 
      element(by.linkText('Contact Us')).click();

      browser.getAllWindowHandles().then(function(windowIds){
        console.log(windowIds[0] + " - " + windowIds[1]);
        browser.switchTo().window(windowIds[1])
        element.all(by.tagName('a')).each(function(email){
          email.getText().then(function(emailID) {
            console.log("Email : " + emailID);
          })
        })

        browser.switchTo().window(windowIds[0])
        element.all(by.tagName('a')).each(function(email){
          email.getText().then(function(link) {
            console.log("Parent browser link : " + link);
          })
        })
      })



    }, 60000);
  });

