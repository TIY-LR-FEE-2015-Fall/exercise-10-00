import Ember from 'ember';

export default Ember.Component.extend({
  languages: ['English'],

  actions: {
    addLanguage() {
      let newLang = this.$('.language-input--new').val();

      let languages = this.get('languages');
      languages.pushObject(newLang);

      this.$('.language-input--new').val('');
    },
  },
});
