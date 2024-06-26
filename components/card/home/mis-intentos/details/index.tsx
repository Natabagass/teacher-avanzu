import Button from "@components/button";
import ImageBlur from "@components/dynamic-blur";
import Text from "@components/text";
import Image from "next/image";
import Link from "next/link";
import { LuClock } from "react-icons/lu";

const CardTitleDetailsIntentos = ({
    data
}: {
    data: {
        name: string,
        title: string,
        time: string,
        total_time: string,
        image: string,
        idCert: string
    }
}) => {
    return (
        <div className="border mt-6 border-stroke-primary p-3 rounded-2xl flex flex-row w-full gap-4">
            <div className="relative w-[15%] min-h-20">
                <ImageBlur src={data.image} fill className="object-cover object-center rounded-xl" alt="Image Cuestion - (Avanzu)" />
            </div>
            <div className="flex flex-col w-full gap-3">
                <div className="flex flex-row items-center w-full justify-between">
                    <div className="flex flex-col w-full gap-2">
                        <Text weight="font-medium" variant="subTitle" size="p1" color="text-white">{data.name}</Text>
                        <Text weight="font-semibold" size="h3" variant="title" color="text-white">{data.title}</Text>
                    </div>
                    <Link href={`/dashboard/certificado/${data.idCert}`} className="h-full w-[20%] flex items-center">
                        <Button size="btn2" type="button" padding="py-4 px-2" variant="primary">
                            Ver Certificado
                        </Button>
                    </Link>
                </div>
                <div className="w-full h-border bg-content-secondary" />
                <div className="flex flex-row w-full items-center text-content-secondary gap-2">
                    <LuClock className="text-base" />
                    <Text weight="font-normal" size="p3" color="text-content-secondary">{data.time}</Text>
                    <span className="text-content-secondary">
                        &#x2022;
                    </span>
                    <LuClock className="text-base" />
                    <Text weight="font-normal" size="p3" color="text-content-secondary">{data.total_time}</Text>
                </div>
            </div>
        </div>
    );
}

export default CardTitleDetailsIntentos;