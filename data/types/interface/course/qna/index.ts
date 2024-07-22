export interface QNATypes {
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
        courseID: number,
        userID: number,
        userDisplayName: string,
        userProfilePicture: string,
        question: string,
        courseTitle: string,
        answer: string,
        isAnswered: boolean,
        createdAt: string,
        updatedAt: string
    }[]
}

export const QNAValue: QNATypes = {
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
            courseID: 0,
            userID: 0,
            userDisplayName: '',
            userProfilePicture: '',
            question: '',
            courseTitle: '',
            answer: '',
            isAnswered: false,
            createdAt: '',
            updatedAt: ''
        }
    ]
}

export interface QNAItem {
    ID: number,
    courseID: number,
    userID: number,
    userDisplayName: string,
    userProfilePicture: string,
    question: string,
    answer: string,
    isAnswered: boolean,
    createdAt: string,
    updatedAt: string
}

export const QNAItems: QNAItem = {
    ID: 0,
    courseID: 0,
    userID: 0,
    userDisplayName: '',
    userProfilePicture: '',
    question: '',
    answer: '',
    isAnswered: false,
    createdAt: '',
    updatedAt: ''
}

