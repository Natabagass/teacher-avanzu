import Text from "@components/text";
import Image from "next/image";
import { IconType } from "react-icons";
import { HiOutlineSparkles } from "react-icons/hi2";

const CardPlanSuscripcion = ({
    data
}: {
    data: {
        type: string,
        price: number,
        discount: number,
        icon: IconType,
        current: boolean,
        benefit:
        {
            item: string,
        }[]
    }[]
}) => {
    return (
        <div className="grid grid-cols-3 w-full gap-20 z-0 relative">
            {data.map((item, index) => (
                <div key={item.type} className="bg-purple-50 rounded-xl border py-6 px-8 border-stroke-primary relative">
                    {item.current && (
                        <div className="absolute top-0 right-0 w-40 h-40">
                            <Image src="/assets/dashboard/current-plan.png" alt="ribbon current - (Avanzu)" fill className="object-contain object-right-top" />
                        </div>
                    )}
                    <div className="w-full flex flex-col items-center gap-3">
                        <div className="rounded-full border border-white p-3">
                            <item.icon className="text-white text-xl" />
                        </div>
                        <Text weight="font-medium" size="p1">{item.type}</Text>
                        <div className="flex flex-row gap-2">
                            <Text weight="font-semibold" size="h2">${item.price}</Text>
                            {item.discount !== 0 && (
                                <div className="">
                                    <Text weight="font-semibold" size="h4" className="line-through decoration-red-300" color="text-content-tertiary">${item.price}</Text>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 flex gap-4 flex-col">
                        {item.benefit.map((sub, index) => (
                            <ol key={index} className="text-left text-white list-disc">
                                <li>
                                    <Text weight="font-semibold" size="p2">{sub.item}</Text>
                                </li>
                            </ol>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
}

export default CardPlanSuscripcion;