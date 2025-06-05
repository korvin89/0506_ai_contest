import { describe, it, expect } from 'vitest';
import { sum, multiply, divide } from './math';

describe('Math functions', () => {
  describe('sum', () => {
    it('should add two positive numbers correctly', () => {
      expect(sum(2, 3)).toBe(6);
    });

    it('should handle negative numbers', () => {
      expect(sum(-1, -2)).toBe(-3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(6, 0)).toThrow('Division by zero is not allowed');
    });
  });
}); 