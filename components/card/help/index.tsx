'use client'

import Text from "@components/text";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { TbMinus, TbPlus } from "react-icons/tb";

const CardHelp = () => {
    const [show, setShow] = useState({
        item: 0,
        subItem: 0
    })

    return (
        <div className="flex flex-col gap-4 w-full mt-6">
            {
                help.map((item, index) => (
                    <div key={item.type} className="border flex flex-col border-stroke-primary rounded-3xl p-6">
                        <div onClick={() => setShow({ ...show, item: item.index, subItem: 0 })} className="flex cursor-pointer flex-row w-full items-center justify-between">
                            <Text weight="font-semibold" variant="title" size="h3">{item.type}</Text>
                            {
                                show.item === item.index ?
                                    <TbMinus className="text-white text-xl" />
                                    :
                                    <TbPlus className="text-white text-3xl" />
                            }
                        </div>
                        {
                            show.item === item.index &&
                            <div className="flex flex-col gap-4 mt-4">
                                {
                                    item.data.map((sub) => (
                                        <div className="border border-stroke-primary flex flex-col gap-2 rounded-2xl p-3" key={sub.id}>
                                            <div onClick={() => setShow({ ...show, subItem: sub.id })} className="w-full cursor-pointer flex justify-between">
                                                <Text size="p1" weight="font-semibold" variant="subTitle">{sub.title}</Text>
                                                <IoIosArrowUp className={`${show.subItem === sub.id ? 'rotate-180' : 'rotate-0'} transition-all duration-300 text-xl text-white`} />
                                            </div>
                                            {
                                                show.subItem === sub.id &&
                                                <Text size="p2" weight="font-normal" color="text-content-secondary" variant="paragraph">{sub.subTitle}</Text>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default CardHelp;

export const help = [
    {
        index: 1,
        type: 'Suggestion',
        data: [
            {
                id: 1,
                title: 'Crear un curso atractivo',
                subTitle: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo'
            },
            {
                id: 2,
                title: 'Crear un curso atractivo',
                subTitle: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo'
            },
        ]
    },
    {
        index: 2,
        type: 'Mi cuenta y configuración',
        data: [
            {
                id: 1,
                title: 'Crear un curso atractivo',
                subTitle: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo'
            },
            {
                id: 2,
                title: 'Crear un curso atractivo',
                subTitle: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo'
            },
        ]
    },
]