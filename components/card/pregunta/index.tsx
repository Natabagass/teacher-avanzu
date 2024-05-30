import Text from "@components/text";
import Image from "next/image";
import Link from "next/link";

const CardPregunta = ({
    data
}: {
    data: {
        image: string,
        title: string,
        user: {
            name: string,
            profile: string,
        },
        ask: string,
        status: boolean,
        date: string,
    }
}) => {
    return (
        <div className="flex flex-row gap-4 w-full border items-center border-stroke-primary rounded-2xl p-2">
            <div className="w-[20%] relative h-[130px]">
                <Image src={data.image} alt="Image Q&A - (Avanzu)" fill className="rounded-xl object-cover object-center" />
            </div>
            <div className="flex flex-col w-full gap-3">
                <div className="flex flex-row items-center w-full justify-between">
                    <Text size="h3" weight="font-semibold" color="text-white" variant="title">{data.title}</Text>
                    <div className={`${data.status === true ? 'border-orange-200' : 'border-green-200'} border border-orange-200 rounded-3xl px-2 py-1 bg-purple-200`}>
                        <Text weight="font-medium" size="cpt1" color={`${data.status === true ? 'text-orange-200' : 'text-green-200'}`}>{data.status === false ? 'Leído' : 'No leído'}</Text>
                    </div>
                </div>
                <div className="flex flex-col bg-purple-100 p-3 rounded-xl w-full gap-4">
                    <div className="flex flex-row w-full gap-2">
                        <div className="relative h-6 w-6">
                            <Image src={data.user.profile} alt="User Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                        </div>
                        <Text size="p2" weight="font-medium" variant="subTitle-sub">{data.user.name}</Text>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <Text size="p2" weight="font-normal" variant="subTitle-sub">{data.date}</Text>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <Text size="p2" weight="font-normal" variant="subTitle-sub">{data.ask}</Text>
                        {
                            data.status === true ?
                                <Link href={'/'}>
                                    <Text size="p2" weight="font-normal">Ver pregunta</Text>
                                </Link>
                                :
                                <div className="flex flex-row">
                                    <Text size="p2" weight="font-normal" color="text-content-secondary">Mentor lo ha respondido,</Text>
                                    <Link href={'/'}>
                                        <Text size="p2" weight="font-normal">Ver respuesta</Text>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPregunta;