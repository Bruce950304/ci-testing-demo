const fs = require('fs');

describe('integration: build artifact', () => {
  test('dist/math.js exists', () => {
    expect(fs.existsSync('dist/math.js')).toBe(true);
  });
  test('built module works', () => {
    const { add } = require('../../dist/math');
    expect(add(2, 3)).toBe(5);
  });
  test('TEST_ENV is set', () => {
    console.log('TEST_ENV =', process.env.TEST_ENV);
    expect(process.env.TEST_ENV).toBeDefined();
  });
});