"use client"

import BannerInstaller from "@components/banner/installer";
import Sidebar from "@components/sidebar";
import NavDashboard from "@components/utils/navbar";
import { useState } from "react";

const DashboardLayout = ({ children, variant, scroll, padding }: { children: React.ReactNode, padding?: string, variant: string, scroll?: boolean }) => {
    const [close, setClose] = useState<boolean>(false)

    switch (variant) {
        case 'banner':
            return (
                <div>
                    <BannerInstaller close={close} setClose={setClose} />
                    <div>
                        {children}
                    </div>
                </div>
            )
        case 'sidebar':
            return (
                <div className="flex w-full">
                    <Sidebar close={close} />
                    <div className="flex flex-col top-0 fixed w-full z-50">
                        <BannerInstaller close={close} setClose={setClose} />
                        <NavDashboard close={close} scroll={scroll} />
                    </div>
                    <div className={`${close ? 'mt-28' : 'mt-48'}  pl-16 flex mb-20 flex-col w-full relative z-40`}>
                        {children}
                    </div>
                </div>
            )
        case 'non-sidebar':
            return (
                <div>
                    <BannerInstaller close={close} setClose={setClose} />
                    <NavDashboard close={close} scroll={scroll} />
                    <div className={padding ? padding : 'p-8'}>
                        {children}
                    </div>
                </div>
            )
    }
}

export default DashboardLayout;