import Text from "@components/text";
import { dollarFormatter } from "@utils/formatter/dollar-formatter";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import { CourseItem } from "data/types/interface/course";
import Image from "next/image";
import Link from "next/link";
import { IoIosStarOutline } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { TbBooks } from "react-icons/tb";
import { secondtoHours } from "@utils/formatter/hours-formatter";

const SingleCourse = ({
    item,
}: {
    item: CourseItem
}) => {
    return (
        <Link href={`/dashboard/mi-curso/detalles/${item.slug}`} className={`h-[420px] border w-full relative bg-base-dark border-stroke-primary rounded-2xl overflow-hidden`}>
            <div className="p-2 flex flex-col gap-6">
                <div className="relative w-full min-h-[195px] bg-base-dark">
                    <Image src={item.thumbnail} alt="Image Course - (Avanzu)" fill className="object-cover object-center rounded-lg" />
                    {
                        item.tagline !== 'None' &&
                        <div className="absolute p-2">
                            <div className={`${item.tagline === 'Nuevo Curso' ? 'bg-neon-green-main' : item.tagline === 'Más vistos' ? 'bg-green-200' : 'text-white bg-purple-500'} px-4 py-2 text-sm rounded-3xl font-medium`}>
                                {item.tagline}
                            </div>
                        </div>
                    }
                </div>
                <div className="flex px-2 flex-col items-start text-left gap-2">
                    <Text size="p3" weight="font-normal" color="text-content-secondary">{item.level}</Text>
                    <Text size="p1" variant="title" weight="font-semibold" className="line-clamp-2 w-[80%]" color="text-white">{item.title}</Text>
                    <div className=" flex w-fit items-center flex-row gap-2 rounded-3xl p-2">
                        <div className="flex flex-row gap-2 items-center">
                            <IoIosStarOutline className="text-sm text-content-secondary" />
                            <Text weight="font-normal" size="cpt1">{item.rating || 0}</Text>
                        </div>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <div className="flex w-full flex-row items-center gap-2">
                            <div className="relative h-4 w-4">
                            <Image src={item.teacherPicture || `${URL_DUMMY_IMAGE}?name=user&size=120`} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                            </div>
                            <Text size="cpt1" weight="font-medium" color="text-white">{item.teacher}</Text>
                        </div>
                    </div>
                    <div className="h-border w-full bg-stroke-primary" />
                    <div className="flex items-center flex-row w-full gap-1 justify-between">
                        <div className="flex flex-row w-full items-center gap-1">
                            <LuClock className="text-white text-sm" />
                            <Text size="p3" weight="font-medium" color="text-white">{secondtoHours(item.hours) || 0} Horas</Text>
                            <span className="text-content-secondary">
                                &#x2022;
                            </span>
                            <TbBooks className="text-white text-sm" />
                            <Text size="p3" weight="font-medium" color="text-white">{item.lessonsCount || 0} Lección</Text>
                        </div>
                        <div>
                            <Text size="p1" variant="subTitle" weight="font-semibold">{dollarFormatter(item.price)}</Text>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SingleCourse;