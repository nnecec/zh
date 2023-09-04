import type { SupportOption } from 'prettier'

import type { ZhOptions } from './types'

export const options: Record<keyof ZhOptions, SupportOption> = {
  noDuplicatePunctuation: {
    category: 'Global',
    default: false,
    description: 'Clear duplicate punctuation.',
    type: 'boolean',
  },
  noSpaceAroundFullwidth: {
    category: 'Global',
    default: true,
    description: 'Clear space around fullwidth.',
    type: 'boolean',
  },
  noSpaceBetweenNumberUnit: {
    array: true,
    category: 'Global',
    default: [{ value: [] }],
    description: 'Clear space between number and unit.',
    type: 'string',
  },
  spaceAroundAlphabet: {
    category: 'Global',
    default: true,
    description: 'Provide space around alphabet.',
    type: 'boolean',
  },
  spaceAroundCode: {
    category: 'Global',
    default: false,
    description: 'Provide space around code.',
    type: 'boolean',
  },
  spaceAroundLink: {
    category: 'Global',
    default: false,
    description: 'Provide space around link.',
    type: 'boolean',
  },
  spaceAroundNumber: {
    category: 'Global',
    default: true,
    description: 'Provide space around number.',
    type: 'boolean',
  },
}
