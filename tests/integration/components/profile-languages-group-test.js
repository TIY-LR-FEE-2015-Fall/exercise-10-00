import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-languages-group', 'Integration | Component | profile languages group', {
  integration: true,
});

test('it renders with set languages', function(assert) {
  this.set('startingLangs', ['German', 'Portuguese']);
  this.render(hbs`{{profile-languages-group startingLanguages=startingLangs}}`);

  assert.equal(this.$('.language-input--existing').length, 2);
});
