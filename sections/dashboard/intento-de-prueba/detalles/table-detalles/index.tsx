'use client'

import Button from "@components/button";
import Table from "@components/table";
import TableColumn from "@components/table/table-column";
import TableHeader from "@components/table/table-header";
import Text from "@components/text";
import Image from "next/image";
import { useState } from "react";
import { IoIosMore, IoMdMore } from "react-icons/io";
import ModalMoreDetalles from "../modal";

const TableDetalles = ({
    item
}: {
    item: {
        id: number,
        profile: {
            nombre: string,
            img: string,
        },
        quiz: string,
        email: string,
        fecha: string,
        intentar: string,
        estado: boolean,
        progress: number
    }
}) => {
    const [open, setOpen] = useState(false)
    const [openSet, setOpenSet] = useState(false)

    return (
        <>
            <Table
                variant="border"
                header={
                    <tr className="text-center">
                        {
                            Header.map((item, index) => (
                                <TableHeader variant="border" key={item} item={item} />
                            ))
                        }
                    </tr>
                }
                columns={
                    <tr className="border border-stroke-primary text-center">
                        <TableColumn variant="border">
                            <div className="flex flex-row items-center text-left justify-center w-full gap-2">
                                <div className="relative w-14 h-14">
                                    <Image src={item.profile.img} alt="Promocion Image - (Avanzu)" fill className="object-center object-cover rounded-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                        {item.profile.nombre}
                                    </Text>
                                    <Text variant="subTitle-sub" weight="font-normal" size="cpt1" color="text-content-secondary">
                                        {item.quiz}
                                    </Text>
                                </div>
                            </div>
                        </TableColumn>
                        <TableColumn variant="border">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item.fecha}
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item.progress}%
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item.intentar}
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border">
                            <div className="w-full flex justify-center items-center flex-row gap-2">
                                <Text variant="subTitle" weight="font-normal" size="p2" color={item.estado ? 'text-green-200' : 'text-red-300'}>
                                    {item.estado ? 'Aprobar' : 'Fracasado'}
                                </Text>
                                <div className="flex flex-col gap-2">
                                    <Button variant="clear" type="button" onClick={() => setOpen(!open)}>
                                        <IoIosMore className="text-white text-lg" />
                                    </Button>
                                    <div className="absolute p-2 right-24 -mt-6">
                                        {
                                            open &&
                                            <ModalMoreDetalles 
                                                open={openSet}
                                                setOpen={setOpenSet}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        </TableColumn>
                    </tr>
                }
            />
        </>
    );
}

export default TableDetalles;

export const Header = [
    'Estudiante',
    'Fecha Enviado',
    'Puntaje',
    'Intentar',
    'Estado',
]