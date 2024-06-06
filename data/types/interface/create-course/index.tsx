export interface Lesson {
    title: string;
    order: number;
    description: string;
    video: string;
    attachment: string;
}

export interface Question {
    type: string,
    question: string,
    description: string,
    options: string,
    answer: string
}

export interface Quizzes {
    title: string,
    attachment: string,
    order: number,
    questions: {
        type: string,
        question: string,
        answers: {
            id: number,
            answer: string,
            isAnswer: boolean
        }[]
    }[]
}

export interface Module {
    title: string;
    order: number;
    lessons: Lesson[];
}

export const value = [
    {
        title: 'Quiz 1',
        attachment: '',
        order: 1,
        questions: [
            {
                id: 1,
                type: 'Options',
                question: '',
                answers: [
                    {
                        id: 0,
                        answer: '',
                        isAnswer: false
                    }
                ]
            },
            {
                id: 2,
                type: 'Options',
                question: '',
                answers: [
                    {
                        id: 0,
                        answer: '',
                        isAnswer: true
                    }
                ]
            }
        ]
    },
    {
        title: 'Quiz 2',
        attachment: '',
        order: 2,
        questions: [
            {
                id: 1,
                type: 'Options',
                question: '',
                answers: [
                    {
                        id: 0,
                        answer: '',
                        isAnswer: false
                    }
                ]
            },
            {
                id: 2,
                type: 'Options',
                question: '',
                answers: [
                    {
                        id: 0,
                        answer: '',
                        isAnswer: true
                    }
                ]
            }
        ]
    }
]