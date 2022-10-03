import { describe, test, expect } from '@jest/globals';
import currentDate from 'api/currentDate';

describe('Test Suite with absolute imports', () => {
  test('currentDate() was imported', () => {
    expect(currentDate).toBeDefined();
    expect(typeof currentDate).toBe('function');
  });
});
