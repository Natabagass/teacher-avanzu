import ImageBlur from "@components/dynamic-blur";
import Text from "@components/text";
import Image from "next/image";

const CardTestimonies = ({
    name,
    img,
    job,
    desc
}: {
    name: string,
    img: string,
    job: string,
    desc: string
}) => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-dark/70 to-base-dark"></div>
            <div className="relative w-full h-[350px] md:h-[450px] -z-30">
                <ImageBlur src={img} alt="Image Testi - (Avanzu)" fill className="object-cover rounded-3xl object-center" />
            </div>
            <div className="absolute inset-0 flex flex-col h-full justify-end text-left p-3 z-50">
                <Text size="p3 md:p1" weight="font-semibold" variant="paragraph" color="text-white">{desc}</Text>
                <div className="flex flex-col md:flex-row w-full mt-4 gap-1 md:gap-2">
                    <Text size="p3 md:p2" weight="font-medium" variant="subTitle-sub" color="text-white">{name}</Text>
                    <Text size="p3 md:p2" weight="font-normal" variant="subTitle-sub" color="text-content-secondary">{job}</Text>
                </div>
            </div>
        </>
    );
}

export default CardTestimonies;