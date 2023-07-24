import type { SupportOption } from 'prettier'

import type { ZhOptions } from './types'

export const options: Record<keyof ZhOptions, SupportOption> = {
  spaceAroundAlphabet: {
    category: 'Global',
    default: true,
    description: 'Provide space around alphabet.',
    type: 'boolean',
  },
}
