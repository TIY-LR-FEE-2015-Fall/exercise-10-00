import Ember from 'ember';

export default Ember.Component.extend({
  languages: ['English'],

  actions: {
    addLanguage() {
      let newLang = this.get('newLanguage');
      let languages = this.get('languages');

      this.set('newLanguage', '');

      languages.pushObject(newLang);
    },
  },
});
