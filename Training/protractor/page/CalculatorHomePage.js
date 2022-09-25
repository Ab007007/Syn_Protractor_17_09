let homepage = function() {

    let firstNumber =  element(by.model('first'))
    let secondNumber = element(by.model('second'))
    let divisionSelection = element(by.xpath("//option[@value='DIVISION']"))
    let goButton = element(by.id('gobutton'))

    this.enterFirstNumber = function(num1) {
        firstNumber.sendKeys(num1)
    }
    this.enterSecondNumber = function(num1) {
        secondNumber.sendKeys(num1)
    }
    this.selectDivision = function() {
        divisionSelection.click()
    }

    this.selectOperation= function (operation) {
        element(by.xpath("//option[@value='"+ operation+"']")).click()
    }

    this.clickOnGoButton = function() {
        goButton.click()
    }
    
    
}

module.exports = new homepage()



