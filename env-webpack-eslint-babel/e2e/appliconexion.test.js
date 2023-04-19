
module.exports = {
  'Test de connexion à l\'application': function(browser) {
    browser
      .url('http://localhost:8080/login') // URL de la page de connexion de votre application
      .waitForElementVisible('body', 5000) // Attendre que le corps de la page soit visible
      .setValue('input[type=email]', 'nomutilisateur@test.com') // Remplir le champ email
      .setValue('input[type=password]', 'monmotdepasse') // Remplir le champ mot de passe
      .click('button[type=submit]') // Cliquer sur le bouton de soumission
      .waitForElementVisible('.dashboard', 5000) // Attendre que le tableau de bord soit visible
      .assert.urlEquals('http://localhost:8080/dashboard') // Vérifier que l'URL de la page est celle du tableau de bord
      .end(); // Terminer le test
  }
};
