import { describe, it, expect } from 'vitest'
import { strictFullwidthAndHalfwidth } from './strict-fullwidth-and-halfwidth'

describe('strictFullwidthAndHalfwidth', () => {
  describe('punctuation conversion', () => {
    it('should convert halfwidth punctuation to fullwidth in Chinese context', () => {
      expect(strictFullwidthAndHalfwidth('你好,世界')).toBe('你好，世界')
    })

    it('should not convert comma in English-only text', () => {
      expect(strictFullwidthAndHalfwidth('a,b')).toBe('a,b')
    })

    it('should convert comma to fullwidth when Chinese characters present', () => {
      expect(strictFullwidthAndHalfwidth('测试,a')).toBe('测试，a')
    })

    it('should convert period to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试.a')).toBe('测试．a')
    })

    it('should convert colon to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试:a')).toBe('测试：a')
    })

    it('should convert semicolon to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试;a')).toBe('测试；a')
    })

    it('should convert exclamation mark to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试!a')).toBe('测试！a')
    })

    it('should convert question mark to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试?a')).toBe('测试？a')
    })

    it('should convert parentheses to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试(a)b')).toBe('测试（a）b')
    })

    it('should convert brackets to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试[a]b')).toBe('测试［a］b')
    })

    it('should convert braces to fullwidth when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试{a}b')).toBe('测试｛a｝b')
    })

    it('should convert multiple punctuation marks when Chinese present', () => {
      expect(strictFullwidthAndHalfwidth('测试,a;b:c')).toBe('测试，a；b：c')
    })
  })

  describe('Chinese context detection', () => {
    it('should convert punctuation when text has Chinese characters', () => {
      expect(strictFullwidthAndHalfwidth('你好,world')).toBe('你好，world')
    })

    it('should not convert punctuation in pure English text', () => {
      expect(strictFullwidthAndHalfwidth('hello, world')).toBe('hello, world')
    })

    it('should handle mixed Chinese and English with low CJK ratio', () => {
      // Only 1 Chinese character out of 20, ratio = 0.05
      const result = strictFullwidthAndHalfwidth('hello, world, this is a test. 中')
      expect(result).toBe('hello, world, this is a test. 中')
    })
  })

  describe('number conversion', () => {
    it('should convert numbers to fullwidth in Chinese context', () => {
      expect(strictFullwidthAndHalfwidth('数字123测试')).toBe('数字１２３测试')
    })

    it('should keep numbers as halfwidth in English context', () => {
      expect(strictFullwidthAndHalfwidth('number 123 test')).toBe('number 123 test')
    })

    it('should not convert numbers when convertNumbers is false', () => {
      expect(strictFullwidthAndHalfwidth('数字123测试', { convertNumbers: false })).toBe(
        '数字123测试',
      )
    })
  })

  describe('special number contexts', () => {
    it('should preserve degrees (90°)', () => {
      expect(strictFullwidthAndHalfwidth('温度90°')).toBe('温度90°')
    })

    it('should preserve percentages (15%)', () => {
      expect(strictFullwidthAndHalfwidth('增长15%')).toBe('增长15%')
    })

    it('should preserve decimals (3.14)', () => {
      expect(strictFullwidthAndHalfwidth('圆周率3.14')).toBe('圆周率3.14')
    })
  })

  describe('CJK threshold option', () => {
    it('should use custom CJK threshold', () => {
      // With higher threshold (0.5), only text with >50% Chinese should trigger conversion
      expect(
        strictFullwidthAndHalfwidth('hello, world 中中中中', { cjkThreshold: 0.5 }),
      ).toBe('hello, world 中中中中')
    })
  })
})
