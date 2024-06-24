export interface AnalyticData {
    students: number,
    teachers: number,
    courses: number,
    ttv: string,
    userAnalyses: {
        months: {
            newUsers: number,
            deletedUsers: number,
            users: number
        }[]
    }[],
    transactionAnalyses: {
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
    userAnalyses: [
        {
            months: [
                {
                    newUsers: 0,
                    deletedUsers: 0,
                    users: 0
                }
            ]
        }
    ],
    transactionAnalyses: [
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