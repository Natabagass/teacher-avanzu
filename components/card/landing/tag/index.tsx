'use client'

import Text from "@components/text";
import Image from "next/image";
import { useState } from "react";
import { IconType } from "react-icons";

const CardTag = ({
    name,
    Icon,
    id,
    selectedName,
    setSelectedName
}: {
    name: string,
    id: number,
    Icon: IconType
    selectedName: string,
    setSelectedName: any
}) => {
    const toggle = (name: string) => {
        setSelectedName(name);
    };
    return (
        <div onClick={() => toggle(name)} 
        className={`${selectedName === name ? 'bg-neon-green-main ' : 'bg-base-secondary' } cursor-pointer flex flex-row py-1 sm:py-2 px-2 sm:px-4 sm:gap-2 items-center w-full sm:w-auto rounded-3xl`}>
            <Icon className={`${selectedName === name ? 'text-base-black' : 'text-white'} text-3xl sm:text-xl`} />
            <Text size="p3 md:p2" variant="subTitle" color={`${selectedName === name ? 'text-base-black' : 'text-white'}`} weight="font-medium">{name}</Text>
        </div>
    );
}

export default CardTag;