'use client'

import Layout from "@layout/main-layout";
import ChangePhoto from "../change-photo";
import ProgressBarProfile from "../data-profile";
import BackButton from "@components/button/back";
import { useProfile } from "@context/auth";
import LoadingPage from "@components/loading";

const MainProfileSection = () => {
    const { userInfo } = useProfile()

    return (
        <>
            {
                userInfo.code === 200 ?
                    <div className="w-full flex justify-center">
                        <div className="flex w-[75%] gap-8 justify-center flex-col items-start">
                            <BackButton />
                            <div className="border w-full border-stroke-primary rounded-3xl p-4">
                                <ChangePhoto />
                                <ProgressBarProfile />
                            </div>
                        </div>
                    </div>
                    :
                    <LoadingPage />
            }
        </>
    );
}

export default MainProfileSection;