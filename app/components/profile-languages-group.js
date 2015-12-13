import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addLanguage() {
      this.$('.language-input--new')
        .toggleClass('language-input--new')
        .toggleClass('language-input--existing');
    },
  },
});
