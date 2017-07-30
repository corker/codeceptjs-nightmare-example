
Feature('Example');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.click('.btn-link.float-right');
  I.click('input.header-search-input');
  I.fillField('input.header-search-input', 'codecept-nightmare-example');
  I.pressKey('Enter');
  // I.wait(5);
});
