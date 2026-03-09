import { describe, it, expect } from 'vitest'
import { spaceAroundCode, spaceAroundLink } from './space-around-block'

describe('spaceAroundCode', () => {
  it('should add space before and after code', () => {
    expect(spaceAroundCode('const', 'foo')).toEqual(['const ', ' foo'])
  })

  it('should handle only prevText', () => {
    expect(spaceAroundCode('const')).toEqual(['const ', undefined])
  })

  it('should handle only nextText', () => {
    expect(spaceAroundCode(undefined, 'foo')).toEqual([undefined, ' foo'])
  })

  it('should handle neither prevText nor nextText', () => {
    expect(spaceAroundCode()).toEqual([undefined, undefined])
  })

  it('should handle empty strings', () => {
    expect(spaceAroundCode('', '')).toEqual(['', ''])
  })
})

describe('spaceAroundLink', () => {
  it('should add space before and after link', () => {
    expect(spaceAroundLink('click', 'here')).toEqual(['click ', ' here'])
  })

  it('should handle only prevText', () => {
    expect(spaceAroundLink('click')).toEqual(['click ', undefined])
  })

  it('should handle only nextText', () => {
    expect(spaceAroundLink(undefined, 'here')).toEqual([undefined, ' here'])
  })

  it('should handle neither prevText nor nextText', () => {
    expect(spaceAroundLink()).toEqual([undefined, undefined])
  })
})
