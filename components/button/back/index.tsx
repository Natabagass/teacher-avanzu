'use client'

import { useRouter } from "next/navigation";
import Button from "..";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
    const router = useRouter()
    return (
        <Button onClick={() => router.back()} variant="clear" type="button" className="text-neon-green-main flex flex-row gap-1 items-center justify-start" padding="0px" size="btn1"><IoIosArrowBack className="text-base" /> Volver</Button>
    );
}

export default BackButton;