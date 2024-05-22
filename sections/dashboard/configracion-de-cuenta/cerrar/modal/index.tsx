import Button from "@components/button";
import Input from "@components/input";
import Modal from "@components/modal/modal-main";
import Select from "@components/select";
import Text from "@components/text";
import { ListboxOption } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";

const ModalCerrar = ({
    open,
    setOpen
}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const { register, formState: { errors }, control } = useForm()

    return (
        <Modal
            placement="center"
            onClick={() => { }}
            open={open}
            width="w-medium"
            title="Informe"
            color="bg-purple-100"
            onOutsideClick={() => setOpen(false)}
        >
            <Text size="p2" weight="font-normal">El personal de Avanzu revisa el contenido marcado para determinar si viola los Términos de servicio o las Pautas de la comunidad. Si tiene alguna pregunta o problema técnico, comuníquese con nuestro equipo de soporte aquí.</Text>
            <div className="mt-4">
                <Controller
                    control={control}
                    name='type'
                    defaultValue={'Seleccione un problema'}
                    render={({ field: { onChange, value, ref } }) => (
                        <Select
                            label="Tipo de problema"
                            onChange={onChange}
                            color="bg-purple-200"
                            value={value}
                        >
                            {
                                dummy.map((item) => (
                                    <ListboxOption
                                        key={item?.name}
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
                <Input
                    variant="textarea"
                    register={register}
                    error={errors}
                    color="bg-purple-200"
                    name="problem"
                    leftIcon={false}
                    placeholder="Describe la descripción de tu curso."
                />
                <div className="flex flex-row w-full mt-4 gap-2">
                    <Button size="btn1" type="button" className="w-full" variant="secondary-subtle" padding="px-6 py-4">
                        Cancelar
                    </Button>
                    <Button onClick={() => setOpen(false)} size="btn1" type="submit" variant="primary" className="w-full" padding="px-6 py-4">
                        Entregar
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalCerrar;

const dummy = [
    {
        name: 'Contenido del curso inapropiado'
    },
    {
        name: 'Comportamiento inapropiado'
    },
    {
        name: 'Violación de la política de Avanzu'
    },
    {
        name: 'Contenido spam'
    },
    {
        name: 'Otra'
    }
]