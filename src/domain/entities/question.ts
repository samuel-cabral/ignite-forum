import { randomUUID } from 'node:crypto'
import type { Slug } from './value-objects/slug'

interface IQuestion {
  title: string
  content: string
  slug: Slug
  authorId: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public slug: Slug
  public authorId: string

  constructor(props: IQuestion, id?: string) {
    this.title = props.title
    this.content = props.content
    this.authorId = props.authorId
    this.slug = props.slug
    this.id = id ?? randomUUID()
  }
}
