import Button from "@components/button";
import Text from "@components/text";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { IoIosMore } from "react-icons/io";
import ModalMoreNotif from "../modal";

const CardNotif = ({
    item,
    open,
    setOpen
}: {
    open: number,
    setOpen: Dispatch<SetStateAction<number>>
    item:
    {
        id: number,
        read: boolean,
        img: string,
        text: string,
        time: string
    },
}) => {
    return (
        <div className="border border-stroke-primary p-4 w-full gap-4 items-center rounded-2xl flex flex-row">
            <div className="flex items-center flex-row gap-2">
                {
                    item.read &&
                    <span className="text-red-200 text-xl">
                        &#x2022;
                    </span>
                }
                <div className="relative w-14 h-14">
                    <Image src={item.img} alt="Profile - (Avanzu)" fill className="object-cover object-center rounded-full" />
                </div>
            </div>
            <div className="flex flex-col w-full gap-2">
                <Text size="p2" weight="font-semibold" variant="paragraph">{item.text}</Text>
                <Text size="p3" weight="font-normal" color="text-content-secondary">{item.time}</Text>
            </div>
            <div className="flex flex-col gap-2">
                <Button variant="clear" type="button" onClick={() => setOpen(item.id === open ? 0 : item.id)}>
                    <IoIosMore className="text-white text-lg" />
                </Button>
                <div className="absolute p-2 right-60 mt-4">
                    {
                        open === item.id &&
                        <ModalMoreNotif />
                    }
                </div>
            </div>
        </div>
    );
}

export default CardNotif;