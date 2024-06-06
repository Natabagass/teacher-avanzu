import Button from "@components/button";
import Input from "@components/input";
import Select from "@components/select";
import Text from "@components/text";
import { useProfile } from "@context/auth";
import { Listbox } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@hooks/modal-global";
import { UpdateProfileSchema, updateProfileSchema } from "data/schema/update-profile";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BiLoaderCircle } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { TbPhone } from "react-icons/tb";

const ProfilChange = (
    {
        data
    }:
        {
            data: {
                name: string,
                occupation: string,
                firstName: string,
                credential: string,
                lastName: string,
                displayName: string,
                email: string,
                phoneNumber: string,
                biography: string,
                type: string
            }
        }) => {
    const { register, formState: { errors, isSubmitting }, getValues, handleSubmit, setError, control } = useForm<UpdateProfileSchema>({
        defaultValues: async () => {
            return fetch(`/api/users`, {
                method: 'GET'
            })
                .then((res: any) => res.json())
                .then((data: any) => {
                    return {
                        name: data.name,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        type: data.type,
                        email: data.email,
                        phoneNumber: data.phoneNumber,
                        occupation: data.occupation,
                        credential: data.credential,
                        displayName: data.displayName,
                        biography: data.biography
                    }
                })
        },
        resolver: zodResolver(updateProfileSchema),
        mode: 'onChange'
    })

    const { setModal } = useModal()

    const onSubmit: SubmitHandler<UpdateProfileSchema> = async (data) => {
        try {
            const res = await fetch(`/api/users`, {
                method: 'PUT',
                body: JSON.stringify(data)
            });
            const datas = await res.json()
            if (datas.code === 200) {
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    subTitle: 'actualizar el éxito de las redes sociales',
                })
            }
            setError('root', datas.errors)
        } catch (error: any) {
            setError('root', error.response.data.errors)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full mt-8 gap-4">
                <div className="flex flex-row w-full gap-3">
                    <Input
                        register={register}
                        error={errors}
                        defaultValue={data.firstName}
                        leftIcon={false}
                        name="firstName"
                        label="Primer Nombre"
                    />

                    <Input
                        error={errors}
                        register={register}
                        defaultValue={data.lastName}
                        leftIcon={false}
                        name="lastName"
                        label="Apellido"
                    />

                    <Input
                        register={register}
                        error={errors}
                        defaultValue={data.name}
                        leftIcon={false}
                        name="name"
                        label="Nombre de Usuario"
                    />
                </div>

                <div className="flex flex-row w-full justify-between gap-4">
                    <Input
                        register={register}
                        error={errors}
                        leftIcon={true}
                        defaultValue={data.email}
                        name="email"
                        disable
                        icon={<MdOutlineEmail className="text-content-secondary text-xl" />}
                        label="Nombre de usuario o correo electrónico"
                    />

                    <Input
                        register={register}
                        error={errors}
                        leftIcon={true}
                        defaultValue={data.phoneNumber}
                        name="phoneNumber"
                        icon={<TbPhone className="text-content-secondary text-xl" />}
                        label="Número de teléfono"
                    />
                </div>

                <Input
                    register={register}
                    error={errors}
                    defaultValue={data.occupation}
                    leftIcon={false}
                    name="occupation"
                    label="Habilidad/Ocupación"
                />

                <Input
                    register={register}
                    error={errors}
                    defaultValue={data.displayName}
                    leftIcon={false}
                    name="displayName"
                    label="Mostrar el nombre públicamente como"
                />

                <Text
                    variant="paragraph"
                    size="p3"
                    weight="font-normal"
                    className="w-[65%]"
                    color="text-content-secondary">
                    El nombre a mostrar se visualiza en todos los campos públicos, como el nombre del autor, el nombre del instructor, el nombre del estudiante y el nombre que se imprimirá en el certificado.
                </Text>

                <Input
                    register={register}
                    error={errors}
                    variant="textarea"
                    defaultValue={data.biography}
                    leftIcon={false}
                    name="biography"
                    className="h-[150px]"
                    label="Biografia"
                />

                <div className="flex flex-row gap-4 mt-4 w-full">
                    <Controller
                        control={control}
                        name='type'
                        defaultValue="CC"
                        render={({ field: { onChange, value, ref } }) => (
                            <Select
                                name="type"
                                error={errors}
                                label="Seleccione"
                                onChange={onChange}
                                value={value}
                                defaultValue={data.type}
                            >
                                {
                                    dummy.map((item) => (
                                        <Listbox.Option
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
                                                        {item?.name}
                                                    </span>
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))
                                }
                            </Select>
                        )}
                    />
                    <Input
                        leftIcon={false}
                        name="credential"
                        error={errors}
                        defaultValue={data.credential}
                        register={register}
                        label="Identification"
                    />
                </div>

                <div className="w-full flex justify-end">
                    <Button
                        type="submit"
                        variant="primary"
                        disable={isSubmitting}
                        size="btn2"                        
                        padding="px-3 py-4"
                    >
                        {
                            isSubmitting ?
                                <div className="flex flex-row w-full justify-center items-center gap-2">
                                    <Text weight="font-medium" color="text-stroke-primary" size="p2">Cargando</Text>
                                    <BiLoaderCircle className="animate-spin text-stroke-primary text-lg" />
                                </div>
                                :
                                'Actualizar el perfil'
                        }
                    </Button>
                </div>
            </form>
        </>
    );
}

export default ProfilChange;

export const dummy = [
    {
        name: 'CC'
    },
    {
        name: 'CE'
    },
    {
        name: 'TI'
    },
    {
        name: 'Passport'
    },
]