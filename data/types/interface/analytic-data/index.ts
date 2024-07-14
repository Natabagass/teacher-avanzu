export interface AnalyticData {
    students: number,
    teachers: number,
    courses: number,
    ttv: string,
    userAnalytics: {
        months: {
            newUsers: number,
            removedUsers: number,
        }[]
    }[],
    transactionAnalytics: {
        months: {
            transactionVolume: string
            coursesPercent: number,
            packagesPercent: number,
            renewalsPercent: number
        }[]
    }[]
}

export const AnalyticDataValue: AnalyticData =
{
    students: 0,
    teachers: 0,
    courses: 0,
    ttv: "0",
    userAnalytics: [
        {
            months: [
                {
                    newUsers: 0,
                    removedUsers: 0,
                }
            ]
        }
    ],
    transactionAnalytics: [
        {
            months: [
                {
                    transactionVolume: "0",
                    coursesPercent: 0,
                    packagesPercent: 0,
                    renewalsPercent: 0
                }
            ]
        }
    ]
}