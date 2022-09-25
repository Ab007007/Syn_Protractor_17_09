const { clear } = require("console");

describe('Actions - Demo', function() {

    it('Handling Alert', function() {
      browser.waitForAngularEnabled(false)
      browser.get('http://formy-project.herokuapp.com/switch-window');
      browser.driver.manage().window().maximize();
 
      element(by.id('alert-button')).click();

      browser.switchTo().alert().getText().then(function(text){
        browser.sleep(5000)
        console.log("Text on Alert : " + text);
      })

      browser.switchTo().alert().accept();

    }, 60000);
  });

