import ImageBlur from "@components/dynamic-blur";
import Text from "@components/text";
import Image from "next/image";

const TopThreeCards = ({
    data
}: {
    data: {
        name: string,
        point: string,
        img: string
    }[]
}) => {
    return (
        <>
            {
                data.map((item, index) => (
                    <div key={index} className="flex flex-col w-full items-center p-4 text-center bg-purple-100 border border-stroke-primary rounded-3xl">
                        <div className="relative min-w-16 min-h-16">
                            <ImageBlur src={item.img} alt="Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                            {
                                index === 0 ?
                                    <div className="absolute min-w-8 min-h-8 flex -right-2 -top-2">
                                        <ImageBlur src={'/assets/dashboard/place-1.svg'} alt="Badge Trophy - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                    </div>
                                    :
                                    index === 1 ?
                                        <div className="absolute min-w-8 min-h-8 flex -right-2 -top-2">
                                            <ImageBlur src={'/assets/dashboard/place-2.svg'} alt="Badge Trophy - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                        </div>
                                        :
                                        <div className="absolute min-w-8 min-h-8 flex -right-2 -top-2">
                                            <ImageBlur src={'/assets/dashboard/place-3.svg'} alt="Badge Trophy - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                        </div>
                            }
                        </div>
                        <Text weight="font-semibold" color="text-white" className="mt-4 mb-2" variant="subTitle" size="p1">{item.name}</Text>
                        <Text weight="font-normal" color="text-content-secondary" variant="subTitle-sub" size="p3">{item.point} pts</Text>
                    </div>
                ))
            }
        </>
    );
}

export default TopThreeCards;