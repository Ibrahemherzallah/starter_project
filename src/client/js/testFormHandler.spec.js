import { checkURL } from './checkURL';
import { handleSubmit  } from './formHandler'

test('Validates URLs correctly', () => {
  expect(checkURL('http://example.com')).toBe(true);
  expect(checkURL('invalid-url')).toBe(false);
  expect(handleSubmit).toBeDefined();
});
