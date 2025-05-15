import { Answer } from '../entities/answer'
import type { IAnswersRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    questionId,
    instructorId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
