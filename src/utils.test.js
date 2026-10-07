import { describe, it, expect } from 'vitest';
import { validateEmail } from './utils.js';

describe('teste 1', () => {
  it('Case 1', () => {
    expect(validateEmail('teste123@')).toBe(false);
  });

  it('Case 2', () => {
    expect(validateEmail('teste@tes.com')).toBe(true);
  });
});
