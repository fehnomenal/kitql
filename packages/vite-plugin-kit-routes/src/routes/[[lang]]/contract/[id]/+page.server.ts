import type { PageServerLoad } from './$types'
import type { Actions } from './$types.d.ts'

export const actions = {
  default: async () => {},
} satisfies Actions

export const load = (async () => {
  return {}
}) satisfies PageServerLoad
