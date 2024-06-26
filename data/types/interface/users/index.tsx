export interface UsersTypes {
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
        id: number,
        email: string,
        name: string,
        coursesProgress: number,
        suspended: boolean,
        completed: boolean,
        completes: number,
        profilePicture: string,
        joinedCourses: number,
        joinedAt: string
    }[]
}

export const UsersValue: UsersTypes = {
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
            id: 0,
            email: '',
            coursesProgress: 0,
            name: '',
            joinedCourses: 0,
            completes: 0,
            suspended: false,
            profilePicture: '',
            completed: false,
            joinedAt: ''
        }
    ]
}

export interface UsersItem {
    id: number,
    email: string,
    name: string,
    suspended: boolean,
    completed: boolean,
    profilePicture: string,
    completes: number,
    joinedCourses: number,
    coursesProgress: number,
    joinedAt: string
}

