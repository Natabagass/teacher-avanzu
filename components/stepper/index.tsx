"use client"

import Button from "@components/button"
import Links from "@components/link"
import Text from "@components/text"
import { useState } from "react"
import { RiArrowRightSLine } from "react-icons/ri"

const Stepper = ({
    step,
    steps,
    className,
    variant,
    next,
    goto
}: {
    step: number,
    steps: string[],
    goto: (id: number) => void,
    className?: string,
    variant?: string,
    next: () => void
}) => {
    const isActive = (index: number) => {
        return index + 1 <= step
    }

    switch (variant) {
        case 'navbar':
            return (
                <div className={"flex w-full bg-purple-200 p-4 flex-row justify-between relative " + className}>
                    <div className="flex flex-row w-full justify-start gap-4">
                        {
                            steps.map((item: React.ReactNode, index: number) => {
                                return (
                                    <div className={`flex flex-row items-center justify-center gap-4`} key={index}>
                                        <div className={`${step === index + 1 ? "bg-purple-blue-500 border-stroke-primary text-white" : "bg-purple-300 border-purple-300 text-purple-400"} ${isActive(index) ? "bg-purple-blue-500 border-stroke-primary text-white" : ""} rounded-full p-4 w-12 h-12 items-center flex border-4`}>
                                            {index + 1}
                                        </div>
                                        <Text size="p2" weight="font-semibold" color={`${step === index + 1 || isActive(index) ? "text-white" : "text-purple-400"}`} variant="subTitle">{item}</Text>
                                        {index !== steps.length - 1 && <RiArrowRightSLine className="text-2xl text-white" />}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-row justify-end items-center gap-4">
                        {
                            step === 1 ?
                                <Links href="/dashboard/curso" padding="px-6 py-4" size="btn1" variant="secondary-subtle">
                                    Cancelar
                                </Links>
                                :
                                <Button
                                    onClick={() => goto(0)}
                                    padding="px-6 py-4"
                                    type="button"
                                    size="btn1"
                                    variant="secondary-subtle"
                                >
                                    Atrás
                                </Button>
                        }
                        {
                            step === 1 ?
                                <Button
                                    onClick={() => next()}
                                    padding="px-6 py-4"
                                    type='button'
                                    size="btn1"
                                    variant="primary"
                                >
                                    Continuar
                                </Button>
                                :
                                <Button
                                    padding="px-6 py-4"
                                    type='submit'
                                    size="btn1"
                                    variant="primary"
                                >
                                    Entregar
                                </Button>
                        }
                    </div>
                </div>
            )
        default:
            return (
                <div className={"flex w-full bg-purple-200 py-4 flex-row justify-center gap-4 rounded-2xl relative " + className}>
                    {
                        steps.map((item: React.ReactNode, index: number) => {
                            return (
                                <div className={`flex flex-row items-center justify-center gap-4`} key={index}>
                                    <div className={`${step === index + 1 ? "bg-purple-blue-500 border-stroke-primary text-white" : "bg-purple-300 border-purple-300 text-purple-400"} ${isActive(index) ? "bg-purple-blue-500 border-stroke-primary text-white" : ""} rounded-full p-4 w-12 h-12 items-center flex border-4`}>
                                        {index + 1}
                                    </div>
                                    <Text size="p2" weight="font-semibold" color={`${step === index + 1 || isActive(index) ? "text-white" : "text-purple-400"}`} variant="subTitle">{item}</Text>
                                    {index !== steps.length - 1 && <RiArrowRightSLine className="text-2xl text-white" />}
                                </div>
                            )
                        })
                    }
                </div>
            );
    }
}

export default Stepper;
