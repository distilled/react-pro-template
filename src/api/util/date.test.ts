import { describe, test, expect } from '@jest/globals';
import date, { DateUtil } from 'api/util/date';

describe('Test suite for date utility object', () => {
  test('default import is loaded', () => {
    expect(date).toBeDefined();
    expect(typeof date).toBe('object');
    expect(date instanceof DateUtil).toBe(true);
  });
  test('imports are loaded', () => {
    expect(DateUtil).toBeDefined();
  });
  test('date.now property getter', () => {
    expect(date.now).toBeDefined();
    expect(date.now).toBeTruthy();
  });
});
