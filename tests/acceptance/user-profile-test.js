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
    var languageField = findWithAssert('.language-input');
    var languageCount = findWithAssert('.language-count');

    assert.equal(emailField.val(), 'admin@example.com');
    assert.equal(languageField.val(), 'English');
    assert.ok(languageCount.text().indexOf('1 Language Saved') > -1, 'User can see language count');
  });
});
