'use client'

import Text from "@components/text";
import Layout from "@layout/main-layout";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const BannerInstaller = ({ close, setClose }: { close: boolean, setClose: React.Dispatch<SetStateAction<boolean>> }) => {

    useEffect(() => {
        setTimeout(() => {
            setClose(false)
        }, 86400000)
    }, [close])

    return (
        <div>
            {
                close === false &&
                <Layout variant="dashboard" className="py-2 bg-purple-blue-500 items-center flex transition-all flex-row w-full justify-between">
                    <div className="w-full">
                        <Text size="p2" weight="font-medium" color="text-white">Ahora puedes aprender la aplicación móvil, instalarla ahora</Text>
                    </div>
                    <div className="flex flex-row w-full items-center justify-end gap-4">
                        <Link href={'/'} target="_blank" className="relative h-[50px] w-[15%]">
                            <Image src={'/assets/icon/google-play-button.png'} alt="Google Play - (Avanzu)" fill className="object-contain object-center" />
                        </Link>
                        <Link href={'/'} target="_blank" className="relative h-[50px] w-[15%]">
                            <Image src={'/assets/icon/app-store.png'} alt="App Store - (Avanzu)" fill className="object-contain object-center" />
                        </Link>
                        {/* <Link href={'/'} target="_blank" className="relative h-[50px] w-[15%]">
                            <Image src={'/assets/icon/app-gallery-badge.svg'} alt="App Gallery - (Avanzu)" fill className="object-contain object-center" />
                        </Link> */}
                        <button
                            onClick={() => {
                                setClose(true)
                            }}
                        >
                            <MdOutlineClose className='text-white text-xl' />
                        </button>
                    </div>
                </Layout>
            }
        </div>
    );
}

export default BannerInstaller;