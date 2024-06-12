export interface Lesson {
    title: string;
    id: number;
    order: number;
    description: string;
    video: string;
    attachment: string;
}

export interface Answer {
    id: number,
    answer: string,
    isAnswer: boolean
}

export interface Question {
    type: string,
    question: string,
    id: number,
    title: string,
    description: string,
    options: string,
    answers: Answer[]
}
export interface Quizzes {
    title: string,
    id: number,
    attachment: string,
    order: number,
    questions: Question[]
}

export interface Module {
    title: string;
    order: number;
    lessons: Lesson[];
    quizzes: Quizzes[];
}

export const value = [
    {
        title: 'Quiz 1',
        attachment: '',
        id: 0,
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
        id: 0,
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