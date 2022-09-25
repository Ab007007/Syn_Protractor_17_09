const { clear } = require("console");
var Objects  = require("./data/ObjectRepository.json")

describe('Actions - Demo', function() {

    it('Handling Frame', function() {
      browser.waitForAngularEnabled(false)
      browser.get(Objects.formurl);
      element(by.id(Objects.Formy_locators.formPage["first-name-id"])).sendKeys("aravinda");
      element(by.id(Objects.Formy_locators.formPage["last-name-id"])).sendKeys("HHB");
      element(by.id(Objects.Formy_locators.formPage["job-title-id"])).sendKeys("Trainer");
      element(by.linkText(Objects.Formy_locators.formPage["Submit-linkText"])).click().then(function(){
        browser.sleep(4000)
        element(by.className(Objects.Formy_locators.formPage["alert-success-class"])).getText().then(function(sm){
          console.log(sm);
        });
      });
      
     }, 60000);
  });

