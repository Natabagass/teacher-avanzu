export interface courseItem {
    name: string,
    img: string,
    id: number,
    time: string,
    author: {
        name: string,
        img: string
    },
    desc: string,
    rating: string,
    person: number,
    completion: {
        item: string,
        percent: number
    },
    price?: string
}