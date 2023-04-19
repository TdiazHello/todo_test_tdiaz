module.exports = {
  // Définit les options globales de Nightwatch
  globals: {
    waitForConditionTimeout: 5000 // Temps d'attente maximum pour les assertions et les commandes
  },

  // Définit les options pour chaque environnement de test
  test_settings: {
    default: {
      // Options pour le navigateur Chrome
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // Définir les options de lancement de Chrome
          args: [
            '--disable-gpu',
            '--headless'
          ]
        }
      }
    }
  }
}
