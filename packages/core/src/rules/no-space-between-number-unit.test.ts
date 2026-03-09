import { describe, it, expect } from 'vitest'
import { noSpaceBetweenNumberUnit } from './no-space-between-number-unit'

describe('noSpaceBetweenNumberUnit', () => {
  const defaultUnits = ['px', 'em', 'rem', 'vh', 'vw', 'px', 'deg']

  it('should remove space between number and unit', () => {
    expect(noSpaceBetweenNumberUnit('10 px', defaultUnits)).toBe('10px')
  })

  it('should remove multiple spaces between number and unit', () => {
    expect(noSpaceBetweenNumberUnit('10  px', defaultUnits)).toBe('10px')
  })

  it('should handle different units', () => {
    expect(noSpaceBetweenNumberUnit('16 em', defaultUnits)).toBe('16em')
    expect(noSpaceBetweenNumberUnit('100 vh', defaultUnits)).toBe('100vh')
    expect(noSpaceBetweenNumberUnit('45 deg', defaultUnits)).toBe('45deg')
  })

  it('should handle multiple occurrences of same unit', () => {
    // This only removes space between number and unit, not between units
    expect(noSpaceBetweenNumberUnit('10px 20px', defaultUnits)).toBe('10px 20px')
  })

  it('should handle numbers without units', () => {
    expect(noSpaceBetweenNumberUnit('hello world', defaultUnits)).toBe('hello world')
  })

  it('should handle numbers without space before unit', () => {
    expect(noSpaceBetweenNumberUnit('10px', defaultUnits)).toBe('10px')
  })

  it('should return original text when no units provided', () => {
    expect(noSpaceBetweenNumberUnit('10 px', [])).toBe('10 px')
    expect(noSpaceBetweenNumberUnit('10 px')).toBe('10 px')
  })

  it('should handle custom units', () => {
    expect(noSpaceBetweenNumberUnit('5 s', ['s', 'ms'])).toBe('5s')
    expect(noSpaceBetweenNumberUnit('100 ms', ['s', 'ms'])).toBe('100ms')
  })

  it('should handle empty string', () => {
    expect(noSpaceBetweenNumberUnit('', defaultUnits)).toBe('')
  })

  it('should handle units after colon', () => {
    // The rule removes space between number and unit, keeping other spaces
    expect(noSpaceBetweenNumberUnit('padding: 10px', defaultUnits)).toBe('padding: 10px')
  })
})
