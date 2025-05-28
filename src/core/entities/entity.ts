import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID(id)
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
