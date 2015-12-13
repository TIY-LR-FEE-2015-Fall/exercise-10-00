import Ember from 'ember';

export default Ember.Component.extend({
  languages: [],

  startLanguages: Ember.on('didReceiveAttrs', function() {
    this.set('languages', this.get('startingLanguages') || []);
  }),

  actions: {
    addLanguage() {
      let newLang = this.get('newLanguage');
      let languages = this.get('languages');

      this.set('newLanguage', '');

      languages.pushObject(newLang);
    },

    removeLanguage(lang) {
      let languages = this.get('languages');
      console.log(lang);

      languages.removeObject(lang);
    },
  },
});
