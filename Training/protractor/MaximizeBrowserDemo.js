const { clear } = require("console");

describe('Actions - Demo', function() {

    it('Development', function() {
      browser.waitForAngularEnabled(false)
      browser.get('https://www.flipkart.com/');
      browser.driver.manage().window().maximize();
      
    
      var EC = protractor.ExpectedConditions
      browser.wait(EC.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))),15000); 
      element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();

      element(by.xpath("//div[text()='Mobiles']/parent::a")).click().then(function(){
        browser.sleep(5000).then(function(){
          browser.actions().mouseMove(element(by.xpath("//span[text()='Men']"))).perform();
          browser.sleep(5000)
          browser.actions().mouseMove(element(by.xpath("//span[text()='Women']"))).perform();
          browser.sleep(5000)
          browser.actions().mouseMove(element(by.xpath("//span[text()='Sports, Books & More']"))).perform();
        })
      });
    }, 60000);
  });

