import ImageBlur from "@components/dynamic-blur";
import Text from "@components/text";
import Image from "next/image";

const BadgeCard = ({
    item
}: {
    item: {
        title: string,
        img: string,
        detail: string
    }
}) => {
    return (
        <div className="border border-stroke-primary rounded-3xl bg-purple-100 p-2 flex flex-col gap-6">
            <div className="bg-purple-200 rounded-2xl flex py-5 px-12  justify-center items-center">
                <div className="relative min-h-[120px] min-w-[240px] w-full">
                    <ImageBlur src={item.img} alt="Image Badge - (Avanzu)" fill className="object-contain object-center" />
                </div>
            </div>
            <div className="flex flex-col gap-1 p-2">
                <Text variant="title" size="p1" color="text-white" weight="font-semibold">{item.title}</Text>
                <Text variant="subTitle" size="p3" color="text-content-secondary" weight="font-medium">{item.detail}</Text>
            </div>
        </div>
    );
}

export default BadgeCard;