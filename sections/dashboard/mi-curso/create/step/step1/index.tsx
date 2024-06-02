import Input from "@components/input";
import Select from "@components/select";
import Text from "@components/text";
import { Listbox } from "@headlessui/react";
import CheckboxInput from "@utils/checkbox-input";
import FileUploader from "@utils/image-uploader";
import TagInput from "@utils/input-tag";
import { submitFile } from "app/api/utils/upload_file";
import { CreateCourseSchema } from "data/schema/create-course";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Controller, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { HiOutlineSparkles } from "react-icons/hi";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { TbExclamationCircle, TbLock } from "react-icons/tb";

type Props<T extends FieldValues> = {
    next: () => void,
    photo: string,
    setPhoto: Dispatch<SetStateAction<string>>,
    goto: (id: number) => void,
    setSelectedFile: any,
    selectedFile: any,
    watch: any,
    setValue: any,
    register: UseFormRegister<T>;
    error: FieldErrors;
    control: any;
    resetField: any
};

const CrearCursoStep1 = ({
    next,
    goto,
    photo,
    setPhoto,
    watch,
    setValue,
    setSelectedFile,
    selectedFile,
    resetField,
    register,
    error,
    control
}: Props<CreateCourseSchema>) => {
    const [identifier, setIdentifier] = useState('')
    const { data: session } = useSession();
    const formData = new FormData();
    formData.append('file', selectedFile);
    const [loading, setLoading] = useState(false)
    console.log(watch('hashtags'))

    const handleFileSubmit = async () => {
        if (session) {
            const token = session.user.token;
            const res = await submitFile(token, formData, setLoading);
            setIdentifier(res.identifier)
        } else {
            console.error('User is not authenticated');
        }
    };

    useEffect(() => {
        if (selectedFile !== '') {
            handleFileSubmit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFile]);

    useEffect(() => {
        if (identifier) {
            setValue('image', identifier);
        } 
    }, [setValue, identifier]);

    return (
        <div className="flex flex-col w-full gap-4">
            {/* <div className="flex flex-row w-full bg-purple-100 p-4 rounded-2xl justify-between">
                <div className="flex items-center flex-row w-full gap-3">
                    <TbLock className="text-white text-xl" />
                    <Text size="p2" weight="font-medium" variant="subTitle">Hacer el curso privado</Text>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-purple-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-neon-green-500"></div>
                </label>
            </div> */}
            <div className="flex flex-col w-full gap-2">
                <Text size="p3" weight="font-normal" color="text-content-secondary">Miniatura del curso</Text>
                <label htmlFor="banner">
                    <FileUploader
                        id="banner"
                        onFileSelect={(file) => setSelectedFile(file)}
                        setPhoto={setPhoto}
                        setSelectedFile={setSelectedFile}
                    />
                    {
                        photo ?
                            <div className="relative border border-stroke-primary rounded-2xl w-full min-h-[200px]">
                                <Image src={photo} alt="Banner - (Avanzu)" fill className="object-cover rounded-2xl border border-stroke-primary object-center" />
                            </div>
                            :
                            <div className="w-full h-[200px] border bg-purple-100 border-stroke-primary rounded-2xl">
                                <div className="justify-center items-center flex-col gap-2 flex w-full h-full">
                                    <div className="w-full flex justify-center">
                                        <div className="rounded-full p-3 border-white border-2">
                                            <HiOutlineSparkles className="text-white text-2xl" />
                                        </div>
                                    </div>
                                    <Text size="p3" weight="font-normal" variant="subTitle" color="text-content-secondary">Sube o arrastra tu imagen (jpg,jpeg,png)</Text>
                                    <div className="flex flex-row w-full justify-center gap-2">
                                        <TbExclamationCircle className="text-orange-200 text-lg" />
                                        <Text size="cpt1" weight="font-normal" variant="subTitle-sub" color="text-content-secondary">200x200 píxeles</Text>
                                    </div>
                                </div>
                            </div>
                    }
                </label>
            </div>
            <Input
                register={register}
                error={error}
                name="nombre"
                label="Nombre del curso"
                leftIcon={false}
                placeholder="Escribe el nombre de tu curso"
            />
            <CheckboxInput
                label="Categoría"
                register={register}
            />
            <TagInput 
                error={error}
                label="Etiqueta"
                placeholder="Escribe tu etiqueta"
                register={register}
                name="hashtags"
                setValue={setValue}
                resetField={resetField}
                watch={watch}
            />
            <Controller
                control={control}
                name='type'
                defaultValue={'Principante'}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        label="Curso de nivel"
                        onChange={onChange}
                        value={value}
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
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))
                        }
                    </Select>
                )}
            />
            <div className="flex flex-col w-full gap-2">
                <Input
                    variant="textarea"
                    register={register}
                    label="Descripción"
                    placeholder="Escribe la descripción de tu curso."
                    error={error}
                    leftIcon={false}
                    name="desc"
                    max={300}
                />
                <div className="w-full flex justify-end">
                    <Text size="p2" weight="font-normal" color="text-content-secondary">{watch('desc')?.length ? watch('desc')?.length : 0}/300</Text>
                </div>
            </div>
            <div className="flex flex-row w-full justify-between">
                <Text size="p2" weight="font-medium" variant="title">Precios</Text>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" { ...register('free') } className="sr-only peer" />
                    <Text size="p3" weight="font-normal" className="mr-2" color="text-content-secondary">Gratis</Text>
                    <div className="relative w-11 h-6 bg-purple-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-neon-green-500"></div>
                    <Text size="p3" weight="font-normal" className="ml-2" color="text-content-secondary">Pagado</Text>
                </label>
            </div>
            <div className="flex flex-row items-center w-full gap-4">
                <Input
                    register={register}
                    error={error}
                    name="price"
                    label="Precio"
                    type="number"
                    leftIcon={true}
                    icon={<PiCurrencyDollarSimple className="text-content-secondary text-xl" />}
                    placeholder="0.0"
                />
                <label className="inline-flex items-center cursor-pointer mt-8">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-purple-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-neon-green-500"></div>
                    <Text size="p3" weight="font-normal" className="ml-2" color="text-content-secondary">Venta</Text>
                </label>
            </div>
        </div>
    );
}

export default CrearCursoStep1;

export const dummy = [
    {
        id: 1,
        name: 'Principante'
    },
    {
        id: 2,
        name: 'Intermedio'
    },
    {
        id: 3,
        name: 'Avanzado'
    }
]