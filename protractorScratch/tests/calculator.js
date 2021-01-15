let homepage = require('../pages/homepage')

describe('demo calculator tests' , function () {



    it('addition test' , function() {
        // browser.get("https://juliemr.github.io/protractor-demo/");

        homepage.getUrl("https://juliemr.github.io/protractor-demo/");

        // element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2')

        // element(by.model('second')).sendKeys('3');

        homepage.enterSecondNumber('3')

        // element(by.css('[ng-click="doAddition()"]')).click();

        homepage.clickGo()

        homepage.verifyResult('5')


        browser.sleep(3000)
    });

    
    
})