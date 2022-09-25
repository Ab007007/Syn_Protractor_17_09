const { clear } = require("console");

describe('Protractor Demo App', function() {

    function mathematicalOperations(a, b, operation)
    {
      element(by.model('first')).sendKeys(a);
      element(by.model('operator')).element(by.xpath("//option[@value='"+ operation+"']")).click();
      element(by.model('second')).sendKeys(b);
      element(by.id('gobutton')).click().then(function() {
          var EC = protractor.ExpectedConditions;
          browser.wait(EC.textToBePresentInElement(element(by.binding('latest')),'66'), 5000).then(function(){
            element(by.binding('latest')).getText().then(function(result){
              console.log(`${operation} of two numbers is : ${result}`);
            });
      
            expect(element(by.binding('latest')).getText()).toBe('66');

        });
    });
     
      
    }

    it('Development', function() {
      browser.waitForAngularEnabled(false)
      browser.get('http://juliemr.github.io/protractor-demo/');
      mathematicalOperations(33,33, "ADDITION");   
    });
  });

