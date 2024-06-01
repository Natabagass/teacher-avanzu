'use client'

import Stepper from "@components/stepper";
import { useMultiStep } from "@hooks/multistep";
import CrearCursoStep1 from "../step/step1";
import Layout from "@layout/main-layout";
import { HiOutlineSparkles } from "react-icons/hi";
import Text from "@components/text";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCourseSchema, createCourseSchema } from "data/schema/create-course";
import CrearCursoStep2 from "../step/step2";

const CrearCursoPage = () => {
    const [photo, setPhoto] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [video, setVideo] = useState('')
    const [files, setFiles] = useState('')
    const { register, formState: { errors }, resetField, setValue, control, watch } = useForm<CreateCourseSchema>({
        resolver: zodResolver(createCourseSchema),
        mode: 'onChange'
    })
    const handleNext = async () => {
        next()
    }

    const handleGoto = (index: number) => {
        goto(index)
    }

    const { next, prev, step: stepElement, currentStepIndex, goto } = useMultiStep([
        <CrearCursoStep1 key={1} setValue={setValue} resetField={resetField} control={control} watch={watch} register={register} error={errors} setSelectedFile={setSelectedFile} selectedFile={selectedFile} photo={photo} setPhoto={setPhoto} next={handleNext} goto={handleGoto} />,
        <CrearCursoStep2 
            key={2} 
            setValue={setValue}
            setVideo={setVideo} 
            setFiles={setFiles}
            watch={watch} 
            register={register} 
            error={errors} 
            next={handleNext} 
            goto={handleGoto}
        />,
    ])

    return (
        <div className="flex flex-col w-full gap-8">
            <Stepper
                next={handleNext}
                variant="navbar"
                step={currentStepIndex + 1}
                steps={["Curso detallado", "Configuración del módulo"]}
            />
            <div className="w-full flex justify-center">
                <div className="flex w-[75%] gap-6 justify-center flex-row items-start">
                    <div className="w-full mb-8">
                        {stepElement}
                    </div>
                    {
                        currentStepIndex === 0 &&
                        <div className="bg-purple-50 border p-4 gap-4 w-[40%] items-center border-stroke-primary rounded-2xl flex flex-col">
                            <div className="w-full flex justify-center">
                                <div className="rounded-full p-3 border-white border-2">
                                    <HiOutlineSparkles className="text-white text-2xl" />
                                </div>
                            </div>
                            <Text size="h4" weight="font-semibold" variant="title">Comienza a definir tu curso</Text>
                            <div className="h-border w-full bg-stroke-primary" />
                            <div className="flex gap-3 px-4 flex-col">
                                {list.map((sub) => (
                                    <ol key={sub.id} className="text-left text-content-secondary list-disc">
                                        <li>
                                            <Text weight="font-semibold" color="text-content-secondary" size="p2">{sub.text}</Text>
                                        </li>
                                    </ol>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CrearCursoPage;

const list = [
    {
        id: 1,
        text: 'Crea títulos atractivos'
    },
    {
        id: 2,
        text: 'Agrega etiquetas para ayudar a los estudiantes a encontrar su curso mientras buscan'
    },
    {
        id: 3,
        text: 'Elige la categoría que se ajuste a tu curso'
    }
]