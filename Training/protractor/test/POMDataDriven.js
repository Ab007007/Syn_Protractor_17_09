let homepage = require('../page/CalculatorHomePage')
let objects = require("../data/ObjectRepository.json")
var using = require('jasmine-data-provider');

describe('Test using POM', () => {

  function testdata() {
    return [{num1:20,num2:30,opn:"ADDITION"},
            {num1:220,num2:30,opn:"DIVISION"},
            {num1:240,num2:30,opn:"MODULO"},
            {num1:250,num2:30,opn:"MULTIPLICATION"},
            {num1:280,num2:30,opn:"SUBTRACTION"} ]
  }

  using(testdata, function(data){

    it('Division Test using POM', () => {
      browser.get(objects.supercal_url)  
      homepage.enterFirstNumber(data.num1)
      homepage.selectOperation(data.opn)
      homepage.enterSecondNumber(data.num2)
      homepage.clickOnGoButton()
    },30000);

  })

});