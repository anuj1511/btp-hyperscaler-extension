import {describe, expect, test} from '@jest/globals';
import {add} from "../src/module"

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(add("1, 2")).toBe(3);
    });
    test('adds 1 + 4 to equal 5', () => {
      expect(add("1, 4")).toBe(5);
    });
  });