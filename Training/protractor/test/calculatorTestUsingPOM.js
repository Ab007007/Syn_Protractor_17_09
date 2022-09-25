let homepage = require('../page/CalculatorHomePage')
let objects = require("../data/ObjectRepository.json")

describe('Test using POM', () => {
    it('Division Test using POM', () => {
      browser.get(objects.supercal_url)  
      homepage.enterFirstNumber(200)
      homepage.selectDivision()
      homepage.enterSecondNumber(20)
      homepage.clickOnGoButton()
    },30000);
});