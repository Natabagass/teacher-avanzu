'use client'

import Text from "@components/text";
import Image from "next/image";
import { SetStateAction, useRef, useState } from "react";

const CardFaq = ({
    ask,
    answer,
}: {
    ask: string,
    answer: string,
}) => {
    const [selected, setSelected] = useState<boolean>(false)
    const toggle = () => {
        setSelected(prevState => !prevState)
    }

    return (
        <div onClick={toggle} className={`${selected ? 'gradient-background-purple' : 'bg-transparent'} border cursor-pointer rounded-3xl p-6 border-white/20`}>
            <div className="flex flex-row w-full justify-between items-center">
                <Text size="p1 md:h3" weight="font-semibold" color="text-white">{ask}</Text>
                {
                    selected ?
                        <Image src={"/assets/icon/minus.svg"} alt="Minus Icon - (Avanzu)" width={20} height={20} />
                        :
                        <Image src={"/assets/icon/plus.svg"} alt="Plus Icon - (Avanzu)" width={20} height={20} />
                }
            </div>
            {
                selected ?
                    <Text size="p3 md:p2" variant="paragraph" color="text-content-secondary" weight="font-normal" className="mt-4">{answer}</Text>
                    :
                    null
            }
        </div>
    );
}

export default CardFaq;