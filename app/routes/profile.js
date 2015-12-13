import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      email: 'admin@example.com',
      languages: ['English'],
    };
  },
});
