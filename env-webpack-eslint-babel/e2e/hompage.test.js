module.exports = {
  'Test d\'ouverture de la page d\'accueil': function(browser) {
    browser
      .url('http://localhost:8080') // URL de la page d'accueil de votre application
      .waitForElementVisible('body', 5000) // Attendre que le corps de la page soit visible
      .assert.titleContains('Accueil') // Vérifier que le titre de la page contient 'Accueil'
      .end(); // Terminer le test
  }
};
