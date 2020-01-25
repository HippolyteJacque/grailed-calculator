const getTotalSold = require('./index.js');

// Jest JavaScript testing framework
// https://jestjs.io/en/


test('Grailed works', () => {
  expect(getTotalSold()).toEqual(2750.97);
});
