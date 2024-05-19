'use client'

import ModalLogout from "@components/modal/home/logout";
import Text from "@components/text";
import { menuSidebar } from "data/types/menuSidebar";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Sidebar = ({ close }: { close: boolean }) => {
    const [large, setLarge] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const splitUrl = pathname.split('/')

    return (
        <div>
            {large && <div onClick={() => { setLarge(false) }} className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-[#00000086] cursor-pointer" />}
            <div className={`flex flex-row justify-center fixed top-0 bottom-0 w-fit pl-3 ${close ? 'top-20' : 'mt-[148px]'} bg-base-dark z-50`}>
                <div className="flex relative mt-2 w-full h-full">
                    <div className={`${!large ? 'w-14' : 'w-72'} bg-base-dark duration-300 transition-all py-2 px-1 sm:px-2 h-full flex flex-col gap-4 relative`}>
                        {menuSidebar.map((item, index) => (
                            <div key={index} className="flex flex-row gap-4 cursor-pointer">
                                <div
                                    onClick={() => {
                                        if (item.name === 'Salir') {
                                            setOpen(true)
                                        } else {
                                            router.push(`${item.path}`)
                                        }
                                    }}
                                    className="flex w-full justify-between">
                                    <div className="w-full flex flex-row gap-2">
                                        {
                                            item.name === 'Lines' ?
                                                <div className="w-[80%] h-border bg-content-secondary" />
                                                :
                                                <>
                                                    <item.icon className={`${item.path === splitUrl[2] ? 'text-purple-blue-500' : 'text-content-secondary'} text-2xl `} />
                                                    <Text className={`${large ? 'block' : 'hidden'}`} size="p2" variant="subTitle" weight="font-medium" color={`${item.path === splitUrl[2] ? 'text-purple-blue-500' : 'text-white'}`}>{item.name}</Text>
                                                </>
                                        }
                                    </div>
                                    {
                                        item.path === splitUrl[2] && large &&
                                        <div className="h-full w-[2px] bg-purple-blue-500" />
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div onClick={() => { setLarge(!large) }} className="relative justify-end transition-all h-full cursor-pointer w-full flex duration-300">
                    <div className="w-[1px] h-[100vh] bg-stroke-primary"></div>
                    <div className="absolute top-10 -right-4 bg-purple-200 border border-stroke-primary rounded-full p-1">
                        <RiArrowRightSLine className={`${large ? 'rotate-180' : 'rotate-0'} text-base text-white`} />
                    </div>
                </div>
            </div>
            <ModalLogout
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}

export default Sidebar;