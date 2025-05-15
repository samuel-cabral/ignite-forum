import { Entity } from '@/core/entities/entity'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  get name() {
    return this.props.name
  }

  static create(name: string, id?: UniqueEntityID) {
    return new Instructor(
      {
        name,
      },
      id,
    )
  }
}
