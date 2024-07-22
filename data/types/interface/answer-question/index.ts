export interface AnswerQuestionTypes {
    metadata: {
        page: number,
        perPage: number,
        pageCount: number,
        totalCount: number,
        links: {
            self: string,
            first: string,
            previous: string,
            next: string,
            last: string
        }
    },
    records: {
        ID: number,
        answer: string,
        answerBy: string,
        courseQuestionID: number,
        createdAt: string,
        updatedAt: string,
        userID: number
    }[]
}

export const AnswerQuestionValues: AnswerQuestionTypes = {
    metadata: {
        page: 0,
        perPage: 0,
        pageCount: 0,
        totalCount: 0,
        links: {
            self: '',
            first: '',
            previous: '',
            next: '',
            last: ''
        }
    },
    records: [
        {
            ID: 0,
            answer: '',
            answerBy: '',
            courseQuestionID: 0,
            createdAt: '',
            updatedAt: '',
            userID: 0
        }
    ]
}

export interface AnswerQuestionItem {
    ID: number,
    answer: string,
    answerBy: string,
    courseQuestionID: number,
    createdAt: string,
    updatedAt: string,
    userID: number
}
