import Button from "@components/button";
import Text from "@components/text";
import CheckStar from "@components/utils/check-star";
import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import { LuMaximize } from "react-icons/lu";

const ResenasList = ({
    item
}: {
    item: {
        star: number,
        total: number,
        details: {
            star: number,
            rating: number
        }[],
        list: {
            id: number,
            name: string,
            date: string,
            img: string,
            star: number,
            desc: string
        }[]
    }
}) => {
    const sliced = item.list.slice(0, 3)

    return (
        <div className="flex flex-row gap-4 mt-4 w-full">
            <div className="flex flex-col gap-3 w-full">
                {
                    sliced.map((data) => (
                        <div key={data.id} className="rounded-xl border border-stroke-primary p-4">
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex flex-row w-full mb-2 justify-between">
                                    <div className="flex flex-row w-full gap-2">
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="relative h-6 w-6">
                                                <Image src={data.img} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                            </div>
                                            <Text size="p2" weight="font-medium" color="text-white">{data.name}</Text>
                                        </div>
                                        <span className="text-content-secondary">
                                            &#x2022;
                                        </span>
                                        <Text size="p2" weight="font-normal" color="text-content-secondary">{data.date}</Text>
                                    </div>
                                    <LuMaximize className="text-white" />
                                </div>
                                <Text size="p2" weight="font-normal" variant="paragraph">{data.desc}</Text>
                                <div className="flex flex-row mt-2">
                                    <CheckStar star={data.star} empty={true} size="text-xl" />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="flex justify-center">
                    <Button size="btn2" type="button" padding="px-6 py-4" variant="secondary-subtle">
                        Ver mos
                    </Button>
                </div>
            </div>
            <div className="flex flex-col border border-stroke-primary p-2 h-fit rounded-2xl w-[40%]">
                <div className="flex flex-col gap-2 items-center">
                    <Text size="p1" weight="font-semibold" variant="subTitle" color="text-purple-blue-500">reseñas</Text>
                    <Text size="h2" weight="font-bold" variant="title">{item.star}</Text>
                    <div className="flex flex-row">
                        <CheckStar star={item.star} empty={true} size="text-3xl" />
                    </div>
                    <Text size="p2" weight="font-normal" color="text-content-secondary">{item.total} Valoraciones</Text>
                    <div className="w-full h-border bg-content-tertiary" />
                    <div className="flex flex-col w-full gap-2 mt-2">
                        {
                            item.details.map((sub, index) => (
                                <div key={index} className="flex flex-row relative gap-3 items-center w-full">
                                    <Text size="p2" weight="font-medium">{sub.rating}</Text>
                                    <div className="flex flex-col w-full">
                                        <div className="relative left-0 h-2 w-full bg-purple-200 rounded-3xl" />
                                        <div style={{ width: `${sub.star}%` }} className={`relative bottom-0 rounded-3xl -mt-2 left-0  h-2 bg-neon-green-500`} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResenasList;