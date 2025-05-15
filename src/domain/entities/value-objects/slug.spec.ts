import { test, expect } from 'vitest'
import { Slug } from './slug'

test('it should be able to create a slug from a text', () => {
  const slug = Slug.createFromText('Example question title')

  expect(slug.value).toBe('example-question-title')
})
