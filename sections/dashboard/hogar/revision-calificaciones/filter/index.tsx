'use client'

import Text from "@components/text";
import CheckStar from "@components/utils/check-star";
import { useState } from "react";
import { TbStarFilled } from "react-icons/tb";

const FilterRevision = () => {
    const [clicked, setClicked] = useState(0)

    const toggle = (stars: number) => {
        setClicked(stars);
    };
    return (
        <>
            <div className="flex flex-row w-full gap-3">
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
                                    <Text size="p2" weight="font-medium" color={`${clicked === item.star ? 'text-purple-50' : 'text-white'}`}>{item.response}</Text>
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