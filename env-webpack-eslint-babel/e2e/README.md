

Exemple 1: Ouvrir la page d'accueil


module.exports = {
  'Test d\'ouverture de la page d\'accueil': function(browser) {
    browser
      .url('http://localhost:8080') // URL de la page d'accueil de votre application
      .waitForElementVisible('body', 5000) // Attendre que le corps de la page soit visible
      .assert.titleContains('Accueil') // Vérifier que le titre de la page contient 'Accueil'
      .end(); // Terminer le test
  }
};

Le commentaire pour chaque ligne de ce script est le suivant :

module.exports = {: Début de la définition du module de test pour Nightwatch.
'Test d\'ouverture de la page d\'accueil': function(browser) {: Définition d'un test nommé "Test d'ouverture de la page d'accueil" et d'une fonction pour le navigateur.
browser: L'objet navigateur pour l'exécution de l'ensemble du test.
.url('http://localhost:8080'): Visite l'URL de la page d'accueil de l'application.
.waitForElementVisible('body', 5000): Attendre que le corps de la page soit visible pendant 5 secondes.
.assert.titleContains('Accueil'): Vérifie que le titre de la page contient le mot-clé 'Accueil'.
.end();: Termine le test.
Ces commentaires aident à comprendre les différentes étapes du script et à les suivre plus facilement lors de l'exécution des tests.

Exemple 2: Connexion à l'application

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

Le commentaire pour chaque ligne de ce script est le suivant :

module.exports = {: Début de la définition du module de test pour Nightwatch.
'Test de connexion à l\'application': function(browser) {: Définition d'un test nommé "Test de connexion à l'application" et d'une fonction pour le navigateur.
browser: L'objet navigateur pour l'exécution de l'ensemble du test.
.url('http://localhost:8080/login'): Visite l'URL de la page de connexion de l'application.
.waitForElementVisible('body', 5000): Attendre que le corps de la page soit visible pendant 5 secondes.
.setValue('input[type=email]', 'nomutilisateur@test.com'): Remplir le champ email avec le nom d'utilisateur.
.setValue('input[type=password]', 'monmotdepasse'): Remplir le champ mot de passe avec le mot de passe.
.click('button[type=submit]'): Cliquer sur le bouton de soumission.
.waitForElementVisible('.dashboard', 5000): Attendre que le tableau de bord soit visible pendant 5 secondes.
.assert.urlEquals('http://localhost:8080/dashboard'): Vérifier que l'URL de la page est celle du tableau de bord.
.end();: Termine le test.
Ces commentaires aident à comprendre les différentes étapes du script et à les suivre plus facilement lors de l'exécution des tests.


Exemple 3: Création d'un nouvel utilisateur


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

Ce script est un test de création d'un nouvel utilisateur. Voici les commentaires pour chaque étape :

.url('http://localhost:8080/users/new'): accéder à l'URL de la page de création d'utilisateur
.waitForElementVisible('body', 5000): attendre que le corps de la page soit visible pendant 5 secondes
.setValue('input[name=firstname]', 'John'): remplir le champ prénom avec la valeur 'John'
.setValue('input[name=lastname]', 'Doe'): remplir le champ nom avec la valeur 'Doe'
.setValue('input[name=email]', 'johndoe@test.com'): remplir le champ email avec la valeur 'johndoe@test.com'
.setValue('input[name=password]', 'monnouveaumotdepasse'): remplir le champ mot de passe avec la valeur 'monnouveaumotdepasse'
.click('button[type=submit]'): cliquer sur le bouton de soumission pour créer le nouvel utilisateur
.waitForElementVisible('.user-profile', 5000): attendre que la page du profil de l'utilisateur soit visible pendant 5 secondes
.assert.containsText('.user-profile h1', 'John Doe'): vérifier que le nom de l'utilisateur est présent sur la page de profil
.end(): terminer le test.
