"use client"

import BackButton from "@components/button/back";
import ModalNotification from "@components/modal/home/notifications";
import ModalProfile from "@components/modal/home/profile";
import Text from "@components/text";
import { useProfile } from "@context/auth";
// import { useProfile } from "@context/auth";
import Layout from "@layout/main-layout";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";

const NavDashboard = ({ scroll, close }: { scroll?: boolean, close: boolean }) => {
    const [state, setState] = useState({
        isScrolled: false,
        open: false,
        profile: false,
        cart: false
    })

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 25;
            setState({ ...state, isScrolled: !isTop });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [state]);

    const { userInfo } = useProfile()
    const pathname = usePathname()
    const splitUrl = pathname.split('/')

    return (
        <>
            <nav className={`${state.isScrolled || scroll === false ? 'bg-base-dark border-b border-stroke-primary' : ' bg-transparent border-b border-transparent'} w-full z-50 transition-all duration-300 py-6`}>
                {/* {
                    pathname.includes('aprender') || pathname.includes('prueba') &&
                    <div style={{ width: `${50}%` }} className={`absolute ${close ? 'top-24' : 'top-40'} -mt-2 rounded-3xl left-0 h-[2px] bg-gradient-to-r from-base-dark via-purple-main to-white`} />
                } */}
                <Layout variant="dashboard">
                    <div className="flex flex-row items-center w-full justify-between">
                        <Link href={'/dashboard/hogar'} className="relative w-full h-full">
                            <Image width={130} height={100} className="object-contain object-center" src={'/assets/avanzu.png'} alt="Logo - (Avanzu)" />
                        </Link>
                        <div className="flex flex-row w-full justify-end cursor-pointer gap-3">
                            <Link href={'/dashboard/notificacion'}
                                className="bg-purple-300 rounded-full p-3">
                                <IoIosNotificationsOutline className="text-base text-white" />
                            </Link>
                            <div
                                onClick={() => setState({ ...state, profile: !state.profile })}
                                className="rounded-full p-3 relative w-10 min-h-full">
                                <Image src={
                                    userInfo.profilePicture && userInfo.profilePicture !== ''
                                        ? userInfo.profilePicture
                                        : userInfo.name && userInfo.name !== ''
                                            ? `${URL_DUMMY_IMAGE}?name=${userInfo.name}&size=120`
                                            : `${URL_DUMMY_IMAGE}?name=user&size=120`
                                } alt="Person Image - (Avanzu)" fill className="object-cover rounded-full object-center" />
                            </div>
                        </div>
                    </div>
                </Layout>
            </nav>
            <ModalProfile
                open={state.profile}
                setOpen={setState}
            />
        </>
    );
}

export default NavDashboard;