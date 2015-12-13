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

test('it renders with no starting languages', function(assert) {
  this.render(hbs`{{profile-languages-group}}`);

  assert.equal(this.$('.language-input--existing').length, 0);
  this.$('.language-input--new').val('Spanish');
  this.$('.language-input--new').change();

  this.$('.language-input-save').click();
  assert.equal(this.$('.language-input--existing').length, 1);
});
