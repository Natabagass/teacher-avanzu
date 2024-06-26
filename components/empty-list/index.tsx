import ImageBlur from "@components/dynamic-blur";
import Text from "@components/text";
import Image from "next/image";

const EmptyList = () => {
    return (
        <div className={`flex w-full mt-12 flex-col items-center justify-center`}>
            <div className="relative">
                <ImageBlur src={'/assets/dashboard/no-results.png'} alt="No result - (Avanzu)" width={168} height={168} />
            </div>
            <Text weight="font-semibold" color="text-white" size="p2">No hay datos disponibles en esta sección</Text>
        </div>
    );
}

export default EmptyList;