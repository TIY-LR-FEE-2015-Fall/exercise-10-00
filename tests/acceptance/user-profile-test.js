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

    assert.equal(languageField.length, 2);
  });
});
