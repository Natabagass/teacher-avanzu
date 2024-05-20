'use client'

import Text from "@components/text";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { LuClock } from "react-icons/lu";
import { TbBooks, TbStar, TbTrash } from "react-icons/tb";

const CardMiCarrito = ({
    item,
}: {
    item: {
            id: number,
            author: {
                name: string,
                img: string
            },
            img: string,
            title: string,
            subTitle: string,
            time: number,
            rating: string,
            total: number,
            course: number,
            price: number
    }
}) => {
    const [show, setShow] = useState<boolean>(false)
    const toggle = () => {
        setShow(prevState => !prevState)
    }

    return (
        <div key={item.id} className="flex flex-row w-full gap-6 items-center">
            <input
                type="checkbox"
                className="check-cart"
                id="check"
            />
            <label htmlFor="check" className="border border-stroke-primary p-3 rounded-2xl flex flex-row w-full gap-4">
                <div className="relative w-[35%] min-h-full">
                    <Image src={item.img} alt="Image Course - (Avanzu)" fill className="object-cover rounded-xl object-center" />
                </div>
                <div className="flex flex-col w-full gap-6">
                    <div className="flex flex-row items-center w-full justify-between">
                        <div className="bg-purple-200 flex gap-2 items-center flex-row p-2 rounded-3xl">
                            <div className="flex flex-row gap-1">
                                <TbStar className="text-content-secondary text-base" />
                                <Text weight="font-medium" size="cpt1" color="text-content-secondary">{item.rating}</Text>
                                <Text weight="font-medium" size="cpt1" color="text-content-secondary">({item.total})</Text>
                            </div>
                            <span className="text-content-secondary">
                                &#x2022;
                            </span>
                            <div className="flex w-full flex-row items-center gap-2">
                                <div className="relative h-4 w-4">
                                    <Image src={item.author.img} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                </div>
                                <Text size="cpt1" weight="font-medium" color="text-white">{item.author.name}</Text>
                            </div>
                        </div>
                        <div className="rounded-full border-2 p-3 border-white bg-purple-100">
                            <TbTrash className="text-2xl text-white" />
                        </div>
                    </div>
                    <Text size="h3" weight="font-semibold" variant="title">{item.title}</Text>
                    <Text size="p2" weight="font-normal" color="text-content-secondary" variant="paragraph">{show ? item.subTitle : item.subTitle.slice(0, 300)} <button onClick={toggle} className="text-base font-medium text-neon-green-500">{!show ? 'Mostrar más...' : 'Mostrar Menos...'}</button></Text>
                    <div className="flex flex-row w-full justify-between">
                        <div className={`flex items-center flex-row w-full gap-1`}>
                            <LuClock className="text-content-secondary text-sm" />
                            <Text size="p3" weight="font-medium" color="text-content-secondary">{item?.time} Horas</Text>
                            <span className="text-content-secondary">
                                &#x2022;
                            </span>
                            <TbBooks className="text-content-secondary text-sm" />
                            <Text size="p3" weight="font-medium" color="text-content-secondary">{item?.course} lección</Text>
                        </div>
                        <div>
                            <Text size="h3" weight="font-semibold" variant="subTitle">${item.price}</Text>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default CardMiCarrito;