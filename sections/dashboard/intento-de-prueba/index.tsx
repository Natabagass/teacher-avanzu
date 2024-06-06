'use client'

import Text from "@components/text";
import Layout from "@layout/main-layout";
import HeaderChoose from "./header-choose";
import { useForm } from "react-hook-form";
import TableIntento from "./table-intento";

const IntentoDePruebaPage = () => {
    const { control, formState: { errors } } = useForm()
    return (
        <Layout variant="dashboard" className="w-full flex flex-col gap-6">
            <Text size="h3" weight="font-semibold">Intento de prueba</Text>

            <HeaderChoose
                errors={errors}
                control={control}
            />
            <TableIntento />
        </Layout>
    );
}

export default IntentoDePruebaPage;