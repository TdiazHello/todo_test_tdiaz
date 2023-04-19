module.exports = {
  'Test de création d\'un nouvel utilisateur': function(browser) {
    browser
      .url('http://localhost:8080/users/new') // URL de la page de création d'utilisateur
      .waitForElementVisible('body', 5000) // Attendre que le corps de la page soit visible
      .setValue('input[name=firstname]', 'John') // Remplir le champ prénom
      .setValue('input[name=lastname]', 'Doe') // Remplir le champ nom
      .setValue('input[name=email]', 'johndoe@test.com') // Remplir le champ email
      .setValue('input[name=password]', 'monnouveaumotdepasse') // Remplir le champ mot de passe
      .click('button[type=submit]') // Cliquer sur le bouton de soumission
      .waitForElementVisible('.user-profile', 5000) // Attendre que la page du profil de l'utilisateur soit visible
      .assert.containsText('.user-profile h1', 'John Doe') // Vérifier que le nom de l'utilisateur est présent sur la page de profil
      .end(); // Terminer le test
  }
};
