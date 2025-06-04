import { Slug } from '@/domain/entities/value-objects/slug'

describe('Slug', () => {
  test('should be able to create a slug from text', () => {
    const slug = Slug.createFromText('Example question title')

    expect(slug.value).toEqual('example-question-title')
  })

  test('should normalize special characters', () => {
    const slug = Slug.createFromText('Título com acentos e çedilha')

    expect(slug.value).toEqual('titulo-com-acentos-e-cedilha')
  })

  test('should remove extra spaces and special characters', () => {
    const slug = Slug.createFromText('  Hello   World!!! @#$%  ')

    expect(slug.value).toEqual('hello-world')
  })

  test('should handle empty string', () => {
    const slug = Slug.createFromText('')

    expect(slug.value).toEqual('')
  })

  test('should replace underscores with dashes', () => {
    const slug = Slug.createFromText('hello_world_test')

    expect(slug.value).toEqual('hello-world-test')
  })

  test('should remove trailing dashes', () => {
    const slug = Slug.createFromText('hello world-')

    expect(slug.value).toEqual('hello-world')
  })
})
