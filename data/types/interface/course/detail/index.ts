export interface DetailCourseTypes {
    id: number,
    title: string,
    slug: string,
    free: boolean,
    price: string,
    lessonsCount: number,
    reveiwsCount: number,
    rating: number,
    thumbnail: string,
    description: string,
    tagline: string,
    level: string,
    teacher: string,
    teacherPicture: string,
    hours: number,
    minutes: number,
    ratingOf1s: number,
    ratingOf2s: number,
    ratingOf3s: number,
    ratingOf4s: number,
    ratingOf5s: number,
    modules: {
        id: number,
        title: string,
        free: boolean
        resources: {
            title: string,
            type: string,
            free: boolean
            durations: string,
            video: string
        }[]
    }[]
}

export const DetailCourseValue: DetailCourseTypes = {
    id: 0,
    title: '',
    slug: '',
    free: false,
    price: '',
    hours: 0,
    lessonsCount: 0,
    reveiwsCount: 0,
    rating: 0,
    description: '',
    thumbnail: '',
    tagline: '',
    level: '',
    teacher: '',
    teacherPicture: '',
    minutes: 0,
    ratingOf1s: 0,
    ratingOf2s: 0,
    ratingOf3s: 0,
    ratingOf4s: 0,
    ratingOf5s: 0,
    modules: [
        {
            id: 0,
            title: '',
            free: false,
            resources: [
                {
                    title: '',
                    type: '',
                    free: false,
                    durations: '',
                    video: ''
                }
            ]
        }
    ]
}