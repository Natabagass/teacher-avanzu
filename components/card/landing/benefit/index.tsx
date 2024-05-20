"use client"

import Text from "@components/text";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { IconType } from "react-icons";

const CardBenefit = ({
    img,
    ids,
    title,
    sub,
    Icon,
    open,
    setOpen
}: {
    img: string,
    ids: number,
    title: string,
    sub: string,
    Icon: IconType,
    open: number,
    setOpen: React.Dispatch<SetStateAction<number>>
}) => {
    const toggle = (id: number) => {
        setOpen(id)
    };

    return (
        <>
            <div onClick={() => toggle(ids)} className={`rounded-3xl component cursor-pointer flex flex-col p-6 ${open === ids ? 'gradient-background-purple' : ''}`}>
                <div className="flex flex-row w-full items-center gap-4">
                    <div className={`${open === ids ? 'bg-purple-secondary' : 'bg-base-secondary'} rounded-full p-3`}>
                        <Icon className="text-white text-3xl" />
                    </div>
                    <Text size="h3" variant="subTitle" color="text-white" weight="font-semibold">{title}</Text>
                </div>
                <div className="mt-4">
                    {open === ids &&
                        <Text size="p2" variant="paragraph" color="text-content-secondary" weight="font-normal">{sub}</Text>
                    }
                </div>
            </div>
        </>
    );
}

export default CardBenefit;