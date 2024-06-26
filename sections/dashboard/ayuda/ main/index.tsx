import BackButton from "@components/button/back";
import CardHelp from "@components/card/help";
import ImageBlur from "@components/dynamic-blur";
import Links from "@components/link";
import Text from "@components/text";
import Layout from "@layout/main-layout";
import Image from "next/image";

const AyudaPage = () => {
    return (
        <Layout variant="content-dashboard">
            <BackButton />
            <div className="relative flex flex-row w-full  justify-between items-center bg-neon-green-500 rounded-xl mt-6">
                <div className="w-full h-[105px]">
                    <ImageBlur alt="Background - (Avanzu)" src={'/assets/dashboard/background-help.png'} className="object-cover object-center" fill />
                </div>
                <div className="absolute inset-0 px-3 py-6 flex flex-row w-full items-center">
                    <div className="flex flex-col w-[90%] gap-1">
                        <Text size="h3" variant="subTitle-sub" color="text-base-dark" weight="font-semibold">Centro de ayuda</Text>
                        <Text size="p2" color="text-content-tertiary" variant="paragraph" weight="font-normal">Visite el Centro de ayuda para obtener actualizaciones y los recursos más recientes para la creación y promoción de cursos.</Text>
                    </div>
                    <div className="w-[45%]">
                        <Links href="mailto:" padding="p-4" variant="white">
                            Póngase en contacto con el centro de ayuda
                        </Links>
                    </div>
                </div>
            </div>

            <Text variant="subTitle-sub" weight="font-semibold" color="text-white" className="mt-8" size="h3">Ayuda</Text>

            <CardHelp />
        </Layout>
    );
}

export default AyudaPage;