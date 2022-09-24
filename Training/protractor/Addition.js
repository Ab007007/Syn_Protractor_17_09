describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');

      element(by.model('first')).sendKeys('123');
      element(by.model('second')).sendKeys('123');
      element(by.id('gobutton')).click();
      element(by.binding('latest')).getText().then(function(result){
        console.log(`Sum of two numbers is : ${result}`);
      });
      
      browser.sleep(15000).then(function(){
        console.log("I'm done!!!!");
        expect(browser.getTitle()).toEqual('Super Calculator');

      })

     

    });
  });

