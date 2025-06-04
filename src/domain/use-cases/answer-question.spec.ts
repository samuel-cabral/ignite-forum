import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question'
import type { IAnswersRepository } from '@/domain/repositories/answers-repository'

const fakeAnswersRepository: IAnswersRepository = {
  create: async () => {},
}

describe('AnswerQuestionUseCase', () => {
  test('should create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
      questionId: '1',
      instructorId: '1',
      content: 'New answer',
    })

    expect(answer.content).toEqual('New answer')
    expect(answer.authorId.toString()).toEqual('1')
    expect(answer.questionId.toString()).toEqual('1')
  })

  test('should create answer with correct timestamps', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
      questionId: '2',
      instructorId: '2',
      content: 'Another answer',
    })

    expect(answer.createdAt).toBeInstanceOf(Date)
    expect(answer.updatedAt).toBeUndefined()
  })

  test('should generate unique answer id', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer1 = await answerQuestion.execute({
      questionId: '1',
      instructorId: '1',
      content: 'First answer',
    })

    const answer2 = await answerQuestion.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Second answer',
    })

    expect(answer1.id.toString()).not.toEqual(answer2.id.toString())
  })
})
