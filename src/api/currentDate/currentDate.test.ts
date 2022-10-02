import { describe, test, expect } from '@jest/globals';
import currentDate from './currentDate';

describe('TestSuite for "currentDate()"', () => {
  test('Return current Date as [string]', () => {
    const date = currentDate();
    expect(date).toBeTruthy();
  });
});
