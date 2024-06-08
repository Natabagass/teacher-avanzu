export interface CourseTypes {
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
        title: string,
        slug: string,
        free: boolean,
        price: string,
        lessonsCount: number,
        reveiwsCount: number,
        rating: number,
        thumbnail: string,
        minutes: number,
        hours: number,
        discountedPrice: string,
        reviewsCount: number,
        tagline: string,
        teacherPicture: string,
        approved: boolean,
        level: string,
        teacher: string
    }[]
}

export const CourseValue: CourseTypes = {
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
            title: '',
            slug: '',
            free: false,
            price: '',
            lessonsCount: 0,
            reveiwsCount: 0,
            rating: 0,
            thumbnail: '',
            approved: false,
            teacherPicture: '',
            tagline: '',
            minutes: 0,
            hours: 0,
            discountedPrice: '',
            reviewsCount: 0,
            level: '',
            teacher: ''
        }
    ]
}

export interface CourseItem {
        id: number,
        title: string,
        slug: string,
        free: boolean,
        price: string,
        lessonsCount: number,
        reveiwsCount: number,
        rating: number,
        thumbnail: string,
        minutes: number,
        hours: number,
        discountedPrice: string,
        reviewsCount: number,
        tagline: string,
        teacherPicture: string,
        approved: boolean,
        level: string,
        teacher: string
}

