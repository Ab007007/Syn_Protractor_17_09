describe('Protractor Demo App', function() {

    function mathematicalOperations(a, b, operation)
    {
      element(by.model('first')).sendKeys(a);
      element(by.model('operator')).element(by.xpath("//option[@value='"+ operation+"']")).click();
      element(by.model('second')).sendKeys(b);
      element(by.id('gobutton')).click();
      element(by.binding('latest')).getText().then(function(result){
        console.log(`${operation} of two numbers is : ${result}`);
      });
    }


    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');

      mathematicalOperations(33,33, "ADDITION");
      mathematicalOperations(323,33, "DIVISION");
      mathematicalOperations(33,3233, "MODULO");
      mathematicalOperations(343,33, "MULTIPLICATION");
      
      browser.sleep(15000).then(function(){
        console.log("I'm done!!!!");
        expect(browser.getTitle()).toEqual('Super Calculator');

      })

     

    });
  });

