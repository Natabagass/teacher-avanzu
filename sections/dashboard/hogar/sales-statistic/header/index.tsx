'use client'

import Select from "@components/select";
import Text from "@components/text";
import { Listbox } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";

const SalesStatisticHeader = () => {
    const { register, formState: { errors }, control } = useForm()

    return (
        <div className="flex flex-row w-full items-center justify-between">
            <Text size="h3" weight="font-semibold" variant="title">Estadísticas de ventas</Text>
        </div>
    );
}

export default SalesStatisticHeader;


const dummy = [
    {
        name: 'Último 1 año'
    },
    {
        name: 'Último 2 año'
    },
    {
        name: 'Último 3 año'
    }
]