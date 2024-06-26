import Button from "@components/button"
import ImageBlur from "@components/dynamic-blur"
import Text from "@components/text"
import { Case, Switch } from "@hooks/conditional-render/switch"
import { courseItem } from "data/types/interface/dashboard/courseItem"
import Image from "next/image"
import Link from "next/link"
import { IoIosStarOutline } from "react-icons/io"
import { LuClock } from "react-icons/lu"
import { RiShoppingCart2Line } from "react-icons/ri"
import { TbBooks } from "react-icons/tb"

const CourseCard = ({
    data,
    variant,
    type
}: {
    data: courseItem[],
    variant?: string,
    type?: string
}) => {
    return (
        <>
            {
                data?.length > 0 ?
                    <>
                        {
                            data?.map((item, index: number) => (
                                <Link href={'/dashboard/cursos/react-desde-cero/aprender/2352'} key={index} className="flex flex-col w-full">
                                    <div className={`${variant === 'down' ? 'flex flex-col gap-2 p-2' : 'flex flex-row gap-6  pl-2 py-2 pr-6'} w-full items-center rounded-3xl border border-stroke-primary bg-base-dark`}>
                                        <div className={`${variant === 'down' ? 'w-full min-h-[250px]' : 'h-[195px] w-[40%]'} relative`}>
                                            <ImageBlur alt="Image Course - (Avanzu)" src={item?.img} fill className="object-cover object-center rounded-2xl" />
                                        </div>
                                        <div className={`${variant === 'down' ? 'gap-4 mt-4 px-3 pb-2' : 'gap-6 justify-between h-full'} flex flex-col w-full`}>
                                            <div className={`${variant === 'down' ? 'flex flex-col items-start gap-3' : 'flex flex-row items-center'} w-full justify-between`}>
                                                <Text variant="subTitle-sub" weight="font-semibold" size="h3" color="text-white">{item?.name}</Text>
                                                <div className="bg-purple-200 flex w-fit items-center flex-row gap-2 rounded-3xl p-2">
                                                    <div className="flex flex-row gap-2 items-center">
                                                        <IoIosStarOutline className="text-sm text-content-secondary" />
                                                        <Text weight="font-normal" size="cpt1" color="text-content-secondary">{item?.rating}</Text>
                                                    </div>
                                                    <span className="text-content-secondary">
                                                        &#x2022;
                                                    </span>
                                                    <div className="flex w-full flex-row items-center gap-2">
                                                        <div className="relative h-4 w-4">
                                                            <ImageBlur src={item?.author.img} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                                        </div>
                                                        <Text size="cpt1" weight="font-medium" color="text-white">{item?.author.name}</Text>
                                                    </div>
                                                </div>
                                            </div>
                                            <Text variant="paragraph" weight="font-normal" size="p2" className="line-clamp-2" color="text-content-secondary">{item?.desc}</Text>
                                            <div className={`${variant === 'down' ? 'mt-4' : ''} flex items-center flex-row w-full gap-1`}>
                                                <LuClock className="text-white text-sm" />
                                                <Text size="p3" weight="font-medium" color="text-white">{item?.time}</Text>
                                                <span className="text-content-secondary">
                                                    &#x2022;
                                                </span>
                                                <TbBooks className="text-white text-sm" />
                                                <Text size="p3" weight="font-medium" color="text-white">{item?.completion.item} &nbsp; <span className="text-content-secondary">({item?.completion.percent}%)</span></Text>
                                            </div>
                                        </div>
                                        <Switch>
                                            <Case condition={type === 'wishlist'}>
                                                <div className="flex flex-row items-center w-full gap-3">
                                                    <div className="rounded-full border p-2 border-white">
                                                        <RiShoppingCart2Line className="text-lg text-white" />
                                                    </div>
                                                    <Button size="btn1" type="button" className="w-full" padding="py-3" variant="primary">
                                                        únete ahora {item?.price}
                                                    </Button>
                                                </div>
                                            </Case>
                                        </Switch>
                                    </div>
                                    <Switch>
                                        <Case condition={type === 'progress'}>
                                            <div style={{ width: `${item?.completion.percent}%` }} className={`relative -mt-[2px] bottom-0 rounded-3xl mx-5 left-0 h-[2px] bg-gradient-to-r from-base-dark via-purple-main to-white`} />
                                        </Case>
                                    </Switch>
                                </Link>
                            ))
                        }
                    </>
                    :
                    <div className={`${variant === 'down' ? 'col-span-3' : ''} flex w-full mt-12 flex-col items-center justify-center`}>
                        <div className="relative">
                            <ImageBlur src={'/assets/dashboard/no-results.png'} alt="No result - (Avanzu)" width={168} height={168} />
                        </div>
                        <Text weight="font-semibold" color="text-white" size="p2">No hay datos disponibles en esta sección</Text>
                    </div>
            }
        </>
    );
}

export default CourseCard;