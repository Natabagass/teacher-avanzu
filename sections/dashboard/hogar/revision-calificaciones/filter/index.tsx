'use client'

import Text from "@components/text";
import CheckStar from "@components/utils/check-star";
import { ReviewsTypes } from "data/types/interface/reviews";
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
        }
    };
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
            <div className="flex flex-row w-full gap-3 overflow-x-scroll">
                {Object.entries(starCounts)
                    .filter(([star, count]) => Number(star) === 0 || count > 0) // Filter untuk hanya menampilkan entri dengan count > 0 atau entri dengan star === 0
                    .map(([star, count]) => (
                        <div
                            key={star}
                            onClick={() => toggle(Number(star))}
                            className={`${clicked === Number(star) ? 'bg-neon-green-main' : 'bg-purple-200'} cursor-pointer flex flex-row gap-2 py-2 px-4 items-center rounded-3xl`}
                        >
                            {Number(star) === 0 ?
                                <Text
                                    size="p2"
                                    weight="font-medium"
                                    color={`${clicked === Number(star) ? 'text-purple-50' : 'text-white'}`}
                                >
                                    Todos
                                </Text>
                                :
                                <>
                                    <CheckStar
                                        star={Number(star)}
                                        empty={false}
                                    />
                                    <Text
                                        size="p2"
                                        weight="font-medium"
                                        color={`${clicked === Number(star) ? 'text-purple-50' : 'text-white'}`}
                                    >
                                        {count}
                                    </Text>
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

const calculateStarCounts = (reviews: ReviewsTypes): StarCounts => {
    const starCounts: StarCounts = {
        0: reviews.records.length,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };

    reviews.records.forEach((review) => {
        const roundedRating = Math.ceil(review.rating);
        starCounts[roundedRating]++;
    });

    return starCounts;
};