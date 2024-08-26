import { checkURL } from '../checkURL';

test('Validates URLs correctly', () => {
  expect(checkURL('http://example.com')).toBe(true);
  expect(checkURL('invalid-url')).toBe(false);
});