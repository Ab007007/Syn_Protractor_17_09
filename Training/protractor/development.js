const { clear } = require("console");
var Objects  = require("./data/ObjectRepository.json")
var data = require('./data/TestData.json')
var using = require('jasmine-data-provider');

describe('Actions - Demo', function() {

  function formTestdata() {
    return [
      {fn:data.formdata.user1.fn, ln:data.formdata.user1.ln,jt:data.formdata.user1.jt},
      {fn:data.formdata.user2.fn, ln:data.formdata.user2.ln,jt:data.formdata.user2.jt}
    ]
  }

  using(formTestdata, function(testdata){
    it('Handling Frame', function() {
      browser.waitForAngularEnabled(false)
      browser.get(Objects.formurl);
      element(by.id(Objects.Formy_locators.formPage["first-name-id"])).sendKeys(testdata.fn);
      element(by.id(Objects.Formy_locators.formPage["last-name-id"])).sendKeys(testdata.ln);
      element(by.id(Objects.Formy_locators.formPage["job-title-id"])).sendKeys(testdata.jt);
      element(by.linkText(Objects.Formy_locators.formPage["Submit-linkText"])).click().then(function(){
        browser.sleep(4000)
        element(by.className(Objects.Formy_locators.formPage["alert-success-class"])).getText().then(function(sm){
          console.log(sm);
        });
      });
      
     }, 60000);


  })

  });

