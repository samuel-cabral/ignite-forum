import { randomUUID } from 'node:crypto'

export abstract class Entity<Props> {
  private _id: string
  protected props: Props

  constructor(props: Props, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }

  get id() {
    return this._id
  }

  equals(entity: Entity<unknown>) {
    if (entity === this) {
      return true
    }

    if (entity.id === undefined) {
      return false
    }

    if (!(entity instanceof Entity)) {
      return false
    }

    return this._id === entity.id
  }
}
