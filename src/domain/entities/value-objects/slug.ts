export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * @description Create a slug from a text
   * @param text - The text to create a slug from
   * @returns A new slug
   * @example
   * ```ts
   * const slug = Slug.createFromText('Hello World')
   * console.log(slug.value) // hello-world
   * ```
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
