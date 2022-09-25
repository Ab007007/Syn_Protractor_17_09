const { clear } = require("console");

describe('Actions - Demo', function() {

    it('Handling Frame', function() {
      browser.waitForAngularEnabled(false)
      browser.get('https://jqueryui.com/droppable/');
      browser.driver.manage().window().maximize();
      browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
      browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform()

      element(by.id('droppable')).getText().then(function(text) {
        console.log(`After perfroming drag and drop :  ${text}`);
      })
     }, 60000);


     it('Handling Frame', function() {
      browser.waitForAngularEnabled(false)
      browser.get('https://jqueryui.com/droppable/');
      browser.driver.manage().window().maximize();
      browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
      browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform()

      element(by.id('droppable')).getText().then(function(text) {
        console.log(`After perfroming drag and drop :  ${text}`);
      })

      browser.switchTo().defaultContent();
      element(by.linkText('Droppable')).click();
      
     }, 60000);
  });

