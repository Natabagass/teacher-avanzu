'use client'

import Button from "@components/button";
import Links from "@components/link";
import Text from "@components/text";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { TbShoppingCart, TbStar } from "react-icons/tb";

const HistorialCard = ({
    data,
}: {
    data: {
        img: string,
        rating: string,
        total_rating: number,
        author: {
            name: string,
            img: string
        },
        title: string,
        desc: string,
        buy: string,
        idBuy: string,
        type: string
        price: string,
        review: boolean
    },
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [openReembolso, setOpenReembolso] = useState<boolean>(false)

    return (
        <div className="flex flex-row w-full gap-4 border border-stroke-primary p-2 mt-6 items-center rounded-2xl">
            <div className="relative w-[20%] h-[230px]">
                <Image src={data.img} alt="Image Historial" fill className="object-center object-cover rounded-xl" />
            </div>
            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="bg-purple-200 flex gap-2 items-center flex-row p-2 rounded-3xl">
                        <div className="flex flex-row gap-1">
                            <TbStar className="text-content-secondary text-base" />
                            <Text weight="font-medium" size="cpt1" color="text-content-secondary">{data.rating}</Text>
                            <Text weight="font-medium" size="cpt1" color="text-content-secondary">({data.total_rating})</Text>
                        </div>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <div className="flex w-full flex-row items-center gap-2">
                            <div className="relative h-4 w-4">
                                <Image src={data.author.img} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                            </div>
                            <Text size="cpt1" weight="font-medium" color="text-white">{data.author.name}</Text>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button variant="clear" type="button" onClick={() => setOpen(!open)}>
                            <IoMdMore className="text-white text-lg" />
                        </Button>
                        {/* <div className="absolute p-2 right-14 mt-6">
                            {
                                open &&
                                <ModalMoreHistorial
                                    openReembolso={openReembolso}
                                    type={data.type}
                                    setOpenReembolso={setOpenReembolso}
                                />
                            }
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Text variant="title" size="h3" weight="font-semibold">{data.title}</Text>
                    <Text variant="paragraph" size="p2" weight="font-normal" color="text-content-secondary">{data.desc}</Text>
                </div>
                <div className="w-full h-border bg-stroke-primary " />
                <div className="flex flex-row items-center w-full justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <TbShoppingCart className="text-content-secondary text-base" />
                        <Text size="p3" weight="font-normal" color="text-content-secondary">{data.buy}</Text>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <Text size="p3" weight="font-normal" color="text-content-secondary"># &nbsp; {data.idBuy}</Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Text size="p1" weight="font-semibold">{data.price}</Text>
                        {
                            data.review &&
                            <Links href={'/'} variant="primary" size="btn2">
                                RESEÑAS
                            </Links>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistorialCard;