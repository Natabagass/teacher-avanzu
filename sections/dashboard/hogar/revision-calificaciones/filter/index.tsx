'use client'

import Text from "@components/text";
import CheckStar from "@components/utils/check-star";
import { useState } from "react";
import { TbStarFilled } from "react-icons/tb";

const FilterRevision = ({ setFilteredData, filteredData, dataResponse }: { setFilteredData: any, filteredData: any, dataResponse: any }) => {
    const [clicked, setClicked] = useState(0)
    const starCounts = calculateStarCounts(dataResponse);

    const toggle = (stars: number) => {
        setClicked(stars);
        if (stars === 0) {
            setFilteredData(dataResponse);
        } else {
            setFilteredData(dataResponse.filter((item: any) => item.star === stars));
        }    };
    return (
        <>
            {/* <div className="flex flex-row w-full gap-3">
                {
                    filter.map((item, index) => (
                        <div key={item.id} onClick={() => toggle(item.star)} className={`${clicked === item.star ? 'bg-neon-green-main' : 'bg-purple-200'} cursor-pointer flex flex-row gap-2 py-2 px-4 items-center rounded-3xl`}>
                            {item.star === 0 ?
                                <>
                                    <Text size="p2" weight="font-medium" color={`${clicked === item.star ? 'text-purple-50' : 'text-white'}`}>Todos</Text>
                                </>
                                :
                                <>
                                    <CheckStar 
                                        star={item.star}
                                        empty={false}
                                    />
                                    <Text size="p2" weight="font-medium" color={`${clicked === item.star ? 'text-purple-50' : 'text-white'}`}>{filteredData.length}</Text>
                                </>
                            }
                        </div>
                    ))
                }
            </div> */}
            <div className="flex flex-row w-full gap-3">
                {
                    Object.entries(starCounts).map(([star, count]) => (
                        <div key={star} onClick={() => toggle(Number(star))} className={`${clicked === Number(star) ? 'bg-neon-green-main' : 'bg-purple-200'} cursor-pointer flex flex-row gap-2 py-2 px-4 items-center rounded-3xl`}>
                            {Number(star) === 0 ?
                                <Text size="p2" weight="font-medium" color={`${clicked === Number(star) ? 'text-purple-50' : 'text-white'}`}>Todos</Text>
                                :
                                <>
                                    <CheckStar 
                                        star={Number(star)}
                                        empty={false}
                                    />
                                    <Text size="p2" weight="font-medium" color={`${clicked === Number(star) ? 'text-purple-50' : 'text-white'}`}>{count}</Text>
                                </>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default FilterRevision;

interface StarCounts {
    [key: number]: number;
}
interface Review {
    id: number;
    name: string;
    img: string;
    course: string;
    star: number;
    date: string;
    comment: string;
}

const calculateStarCounts = (reviews: Review[]): StarCounts => {
    const starCounts: StarCounts = {
        0: reviews.length,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };

    reviews.forEach((review) => {
        starCounts[review.star]++;
    });

    return starCounts;
};


export const filter = [
    {
        id: 1,
        star: 0,
        response: 100,
    },
    {
        id: 2,
        star: 1,
        response: 100,
    },
    {
        id: 3,
        star: 2,
        response: 100,
    },
    {
        id: 4,
        star: 3,
        response: 40,
    },
    {
        id: 5,
        star: 4,
        response: 10,
    },
    {
        id: 6,
        star: 5,
        response: 23,
    },
]