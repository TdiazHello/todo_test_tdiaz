module.exports = {
  'Page d'accueil' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.titleContains('Accueil')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'Nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.results', 'Nightwatch')
      .end();
  }
};
