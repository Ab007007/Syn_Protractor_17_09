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
      
      browser.sleep(5000).then(function(){
        console.log("I'm done!!!!");
        expect(browser.getTitle()).toEqual('Super Calculator');

      })
      // Printing total number of rows
      element.all(by.repeater('result in memory')).count().then(
        function(count) {
            console.log(`Total number of Rows in a Table ${count}`);
        });

      // print first Row
      element.all(by.repeater('result in memory')).first().getText().then(
        function(dateandtime) {
          console.log(` first Row ${dateandtime}`);
        })
     // Print date and time of first Row
     element.all(by.repeater('result in memory')).first().element(by.binding('result.timestamp')).getText().then(
      function(dateandtime) {
        console.log(`Date and time of first Row ${dateandtime}`);
      })
     // Print Result of first Row
     element.all(by.repeater('result in memory')).first().element(by.binding('result.value')).getText().then(
      function(dateandtime) {
        console.log(`Result of first Row ${dateandtime}`);
      })
     

     //  Print date and time of any given Row
      // Print date and time of first Row
      let rownumber = 2
      element.all(by.repeater('result in memory')).get(rownumber).element(by.binding('result.timestamp')).getText().then(
        function(dateandtime) {
          console.log(`Date and time of ${rownumber} Row ${dateandtime}`);
        })
    // Print Result of any given Row
       element.all(by.repeater('result in memory')).get(rownumber).element(by.binding('result.value')).getText().then(
        function(dateandtime) {
          console.log(`Result of ${rownumber} Row ${dateandtime}`);
        })


      // print all rows
      element.all(by.repeater('result in memory')).each(function(row){
        row.getText().then(function(text){
          console.log(`Value from ROW : ${text}`);
        })
      })
    // print all rows with index
    element.all(by.repeater('result in memory')).each(function(row, index){
      row.getText().then(function(text){
        console.log(`${index} Value from ROW : ${text}`);
      })
    })

    });
  });

