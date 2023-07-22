import { SupportOption } from 'prettier'
import { ZhOptions } from './types'

export const options: Record<keyof ZhOptions, SupportOption> = {
  spaceAroundAlphabet: {
    type: 'boolean',
    category: 'Global',
    default: true,
    description: 'Provide space around alphabet.',
  },
}
