import { test } from 'qunit';
import moduleForAcceptance from 'exercise-00/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user profile');

test('User can visit URL profile', function(assert) {
  visit('/profile');

  andThen(function() {
    assert.equal(currentURL(), '/profile');
  });
});

test('User can see profile form', function(assert) {
  visit('/profile');

  andThen(function() {
    var emailField = findWithAssert('[name=email]');
    var languageField = findWithAssert('.language-input--existing');
    var languageCount = findWithAssert('.language-count');

    assert.equal(emailField.val(), 'admin@example.com');
    assert.equal(languageField.val(), 'English');
    assert.ok(languageCount.text().indexOf('1 Language Saved') > -1, 'User can see language count');
  });
});

test('User can add a language', function(assert) {
  visit('/profile');

  fillIn('.language-input--new', 'Spanish');
  click('.language-input-save');

  andThen(function() {
    var languageField = findWithAssert('.language-input--existing');
    var newLanguageField = findWithAssert('.language-input--new');

    assert.equal(languageField.length, 2);
    assert.equal(languageField.eq(1).val(), 'Spanish');
    assert.equal(newLanguageField.val(), '');
  });
});

test('User can delete the last language', function(assert) {
  visit('/profile');

  click('.language-input-delete');

  andThen(function() {
    var languageField = find('.language-input--existing');
    findWithAssert('.language-input--new');

    assert.equal(languageField.length, 0);
  });
});

test('User can delete the a language after creating one', function(assert) {
  visit('/profile');

  fillIn('.language-input--new', 'Spanish');
  click('.language-input-save');
  click('.language-input-delete[data-language=English]');

  andThen(function() {
    var languageField = findWithAssert('.language-input--existing');
    findWithAssert('.language-input--new');

    assert.equal(languageField.length, 1);
    assert.equal(languageField.eq(0).val(), 'Spanish');
  });
});
