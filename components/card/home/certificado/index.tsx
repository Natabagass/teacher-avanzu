'use client'

import Button from "@components/button";
import ModalShare from "@components/modal/home/share";
import Text from "@components/text";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { TbDownload, TbShare } from "react-icons/tb";

const CardCertificado = ({
    data
}: {
    data: {
        name: string,
        idCert: string
    }[]
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname()
    const router = useRouter()

    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                {
                    data.map((item, index) => (
                        <div key={index} className="bg-purple-100 flex flex-col border border-stroke-primary rounded-3xl p-2">
                            <div className="bg-purple-200 rounded-2xl flex p-4 w-full flex-col items-center justify-center">
                                <div className="w-full flex justify-end">
                                    <div onClick={() => setOpen(true)} className="relative cursor-pointer rounded-full bg-neon-green-main p-2 right-0">
                                        <TbShare className="text-base-dark text-lg" />
                                    </div>
                                </div>
                                <div className="relative min-w-[90px] min-h-[125px]">
                                    <Image src={'/assets/dashboard/certificado-badge.svg'} alt="Badge Cert - (Avanzu)" fill className="object-cover object-center" />
                                </div>
                            </div>
                            <div className="p-2 flex flex-col gap-4">
                                <div className="flex flex-col w-full gap-2">
                                    <Text weight="font-semibold" size="p1" variant="title" color="text-white">{item.name}</Text>
                                    <Text weight="font-medium" size="p3" className="flex items-center flex-row gap-2" variant="subTitle-sub" color="text-content-secondary">
                                        ID: <span className="text-white text-base font-medium">{item.idCert}</span>
                                    </Text>
                                </div>
                                <div className="w-full flex flex-row gap-3">
                                    <div className="rounded-full bg-purple-300 border border-stroke-primary p-3">
                                        <TbDownload className="text-white text-xl" />
                                    </div>
                                    <Button
                                        onClick={() => router.push(`/dashboard/certificado/${item.idCert}`)}
                                        size="btn2"
                                        variant="primary"
                                        className="w-full"
                                        type="button" 
                                        padding="py-4 px-2">
                                            Ver Certificado
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ModalShare
                open={open}
                setOpen={setOpen}
                qrcode="/assets/dashboard/qr-code.svg"
                pathname={pathname}
            />
        </>
    );
}

export default CardCertificado;