'use client'

import Text from "@components/text";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { TbBooks, TbLock, TbPlayerPlay, TbStar } from "react-icons/tb";

interface ModuleState {
    [key: number]: boolean;
}

const ListCourseModule = ({
    item,
    maxHeight
}: {
    maxHeight?: string
    item: {
        id: number,
        free: boolean,
        title: string,
        resources: {
            title: string,
            type: string,
            free: boolean,
            durations: string,
            video: string
        }[]
    }[]
}) => {
    const [module, setModule] = useState({} as ModuleState);

    const toggleModule = (id: number, flag: boolean) => {
        if (flag === true) {
            setModule((prevState) => ({
                ...prevState,
                [id]: !prevState[id]
            }));
        }
    };

    return (
        <div className={`${maxHeight ? maxHeight : ''} mt-4 border overflow-auto border-stroke-primary rounded-xl bg-purple-200`}>
            {
                item.map((sub) => (
                    <div key={sub.id}>
                        <div onClick={() => toggleModule(sub.id, sub.free)} className="flex flex-row w-full justify-between items-center p-3">
                            <div className={`${sub.free === false || sub.free === undefined ? 'cursor-not-allowed' : ''} flex flex-col gap-2`}>
                                <Text size="p1" weight="font-semibold" color={sub.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-white'} variant="title">{sub.title}</Text>
                                <div className={`flex items-center flex-row w-full gap-1`}>
                                    <TbBooks className={`${sub.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-content-secondary'} text-sm `} />
                                    <Text size="p3" weight="font-medium" color={sub.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-content-secondary'}>{sub.resources.length} lección </Text>
                                    <span className={sub.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-content-secondary'}>
                                        &#x2022;
                                    </span>
                                    <LuClock className={`${sub.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-content-secondary'} text-sm `} />
                                    {/* <Text size="p3" weight="font-medium" color={sub.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-content-secondary'}>{sub?.time} horas</Text> */}
                                </div>
                            </div>
                            {
                                sub.free === false || sub.free === undefined
                                    ? <TbLock className="text-content-secondary text-lg" />
                                    : <IoIosArrowDown className={`${module[sub.id] === true ? 'rotate-180' : ''} text-white text-lg`} />
                            }
                        </div>
                        {sub.id !== item.length && (
                            <div className="w-full bg-stroke-primary h-border" />
                        )}
                        <div className={`${module[sub.id] === true ? 'block' : 'hidden'} transition-all duration-300 bg-purple-100`}>
                            {sub.resources.map((data, index) => (
                                <div key={index}>
                                    <div className="flex flex-row w-full justify-between items-center p-3">
                                        <div className={`${data.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-white'} flex flex-row items-center w-full gap-2`}>
                                            {
                                                data.type === 'course'
                                                    ? <TbPlayerPlay className="text-base " />
                                                    : data.type === 'quiz'
                                                        ? <TbStar className="text-base " />
                                                        : <IoVideocamOutline className="text-base " />
                                            }
                                            <Text size="p2" variant="subTitle" weight="font-semibold" color={data.free === false || sub.free === undefined ? 'text-content-tertiary' : 'text-white'}>{data.title}</Text>
                                        </div>
                                        {
                                            sub.free === false || sub.free === undefined
                                                ? <TbLock className="text-content-secondary text-lg" />
                                                : <Text size="p3" weight="font-semibold" color="text-content-secondary">{data.durations}</Text>
                                        }
                                    </div>
                                    {index !== sub.resources.length && (
                                        <div className="w-full bg-stroke-primary h-border" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ListCourseModule;