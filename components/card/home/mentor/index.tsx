import Text from "@components/text";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { LuBookMinus } from "react-icons/lu";

const CardMentor = ({
    item
}: {
    item: {
        img: string,
        name: string,
        role: string,
        time: string,
        course: string
    }
}) => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-dark"></div>
            <div className="relative w-full h-[450px] -z-30">
                <Image src={item.img} blurDataURL={item.img} placeholder="blur" alt="Image Testi - (Avanzu)" fill className="object-cover border border-content-primary rounded-3xl object-center" />
            </div>
            <div className="absolute inset-0 z-50">
                <div className="flex flex-col w-full p-3 gap-1 h-full justify-end items-center">
                    <Text size="p3" color="text-white" weight="font-medium" >{item.role}</Text>
                    <Text size="h3" color="text-white" weight="font-semibold" >{item.name}</Text>
                    <div className="flex flex-row gap-2">
                        <IoIosStarOutline className="text-lg text-content-secondary" />
                        <Text size="p3" color="text-content-secondary" weight="font-medium" >{item.time}</Text>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <LuBookMinus className="text-content-secondary text-lg" />
                        <Text size="p3" color="text-content-secondary" weight="font-medium" >{item.course}</Text>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardMentor;