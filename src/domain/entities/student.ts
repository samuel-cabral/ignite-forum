import { Entity } from '@/core/entities/entity'

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name
  }

  static create(name: string, id?: string) {
    return new Student(
      {
        name,
      },
      id,
    )
  }
}
