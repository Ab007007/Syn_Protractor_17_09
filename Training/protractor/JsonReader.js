const { clear } = require("console");
var Objects  = require("./data/ObjectRepository.json")

describe('Actions - Demo', function() {

    it('Handling Frame', function() {
      browser.waitForAngularEnabled(false)
      browser.get(Objects.url);
      browser.driver.manage().window().maximize();
      browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
      browser.actions().dragAndDrop(element(by.id(Objects.jquery_locators.draganddropPage.dragEle)), 
      element(by.id(Objects.jquery_locators.draganddropPage.dropEle))).perform()

      element(by.id(Objects.jquery_locators.draganddropPage.dropEle)).getText().then(function(text) {
        console.log(`After perfroming drag and drop :  ${text}`);
      })
     }, 60000);
  });

