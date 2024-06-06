export interface ReviewsTypes {
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
        username: string,
        message: string,
        rating: number,
        commentedAt: string
    }[]
}

export const ReviewsValue: ReviewsTypes = {
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
            username: '',
            message: '',
            rating: 0,
            commentedAt: ''
        }
    ]
}

export interface ReviewsItem {
    username: string,
    message: string,
    rating: number,
    commentedAt: string
}
