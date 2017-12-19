module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://fintechgaragelab-test.mybluemix.net/')
      .waitForElementVisible('#saiba-maisLink', 60000, true,
        function(){}, 'Waiting for button to become visible')
      .click('#saiba-maisLink')
      .waitForElementPresent('#rodizio h2', 60000)
      .pause(5000)
      .end();
  }
};
