'use client'

import Select from "@components/select";
import Text from "@components/text";
import { ListboxOption } from "@headlessui/react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { TbCalendarEvent } from "react-icons/tb";

const HeaderChoose = ({
    control
}: {
    control: any
}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false)
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="flex flex-row w-full gap-4">
            <Controller
                control={control}
                name='cursos'
                defaultValue={'React Desde Cero'}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        label="Cursos"
                        onChange={onChange}
                        value={value}
                    >
                        {
                            course.map((item) => (
                                <ListboxOption
                                    key={item?.id}
                                    className={'pt-2 text-sm text-content-secondary cursor-pointer'}
                                    value={item?.name}
                                    onClick={() => { }}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate`}
                                            >
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                </ListboxOption>
                            ))
                        }
                    </Select>
                )}
            />
            <Controller
                control={control}
                name='order'
                defaultValue={'React Desde Cero'}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        label="Ordenar por"
                        onChange={onChange}
                        value={value}
                    >
                        {
                            order.map((item) => (
                                <ListboxOption
                                    key={item?.id}
                                    className={'pt-2 text-sm text-content-secondary cursor-pointer'}
                                    value={item?.name}
                                    onClick={() => { }}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate`}
                                            >
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                </ListboxOption>
                            ))
                        }
                    </Select>
                )}
            />
            <div className="w-full gap-2 flex flex-col">
                <Text size="p3" weight="font-normal" color="text-content-secondary">Periodo de inicio</Text>
                <div onClick={() => setShow(!show)} className="rounded-full border border-stroke-primary cursor-pointer flex flex-row w-full gap-4 items-center bg-purple-100 p-3">
                    <TbCalendarEvent className="text-white text-lg" />
                    <Text size="p3" weight="font-normal" color="text-content-secondary">
                        {
                            startDate ?
                                startDate.toDateString()
                                :
                                'Seleccione fecha de inicio'
                        }
                    </Text>
                </div>
                {
                    show &&
                    <div className="absolute mt-24 z-50">
                        <ReactDatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export default HeaderChoose;

const course = [
    {
        id: 1,
        name: 'React Desde Cero'
    },
    {
        id: 2,
        name: 'Tese Desde'
    }
]

const order = [
    {
        id: 1,
        name: 'ascendiendo'
    },
    {
        id: 2,
        name: 'descendiendo'
    }
]