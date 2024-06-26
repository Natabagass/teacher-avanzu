import Button from "@components/button";
import ImageBlur from "@components/dynamic-blur";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { TbDownload } from "react-icons/tb";

const ModalEstudianteSingle = ({
    open,
    setOpen,
    openCertif,
    setCertif,
    id,
    setId
}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    openCertif: string,
    setCertif: Dispatch<SetStateAction<string>>,
    id: number,
    setId: Dispatch<SetStateAction<number>>
}) => {
    return (
        <>
            <Modal
                open={open}
                onClick={() => { }}
                onOutsideClick={() => {
                    setOpen(false)
                    setId(0)
                    setCertif('')
                }}
                color="bg-purple-100"
                width="w-large"
                title={openCertif ? 'Certificado' : 'Detalles del estudiante'}
                placement="center"
            >
                {
                    openCertif ?
                        <div className="w-full h-[450px] relative">
                            <ImageBlur src={openCertif} alt="Certificate - (Avanzu)" className="object-cover object-center" fill />
                        </div>
                        :
                        <div className="flex flex-col w-full gap-6">
                            <div className="bg-purple-200 flex flex-col gap-4 border border-stroke-primary rounded-2xl p-4">
                                <div className="flex flex-row w-full items-center justify-between">
                                    <div className="flex flex-row items-center w-full gap-4">
                                        <div className="rounded-full p-3 relative w-16 h-16">
                                            <ImageBlur src={`/assets/cursos/person-2.png`} alt="Profile - (Avanzu)" fill className="object-cover rounded-full object-center" />
                                        </div>
                                        <div className="flex flex-col h-full justify-between">
                                            <Text size='p1' weight="font-semibold" variant="title">Acumalaka Podot</Text>
                                            <Text size='p2' weight="font-normal" color="text-content-secondary" variant="subTitle">Estudiante</Text>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <Button size="btn2" type="button" padding="px-6 py-4" variant="primary" className="flex flex-row gap-2">
                                            <TbDownload />
                                            Exportar como informe
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-row w-full bg-purple-300 p-4 rounded-xl">
                                    <div className="flex flex-col items-center w-full h-full justify-between">
                                        <Text size="p3" weight="font-semibold" variant="subTitle">4</Text>
                                        <Text size="p2" weight="font-normal" variant="subTitle-sub" color="text-content-secondary">Curso matriculado</Text>
                                    </div>
                                    <div>
                                        <div className="h-full w-[1.5px] bg-content-tertiary" />
                                    </div>
                                    <div className="flex flex-col items-center w-full h-full justify-between">
                                        <Text size="p3" weight="font-semibold" variant="subTitle">1</Text>
                                        <Text size="p2" weight="font-normal" variant="subTitle-sub" color="text-content-secondary">Certificado</Text>
                                    </div>
                                    <div>
                                        <div className="h-full w-[1.5px] bg-content-tertiary" />
                                    </div>
                                    <div className="flex flex-col items-center w-full h-full justify-between">
                                        <Text size="p3" weight="font-semibold" variant="subTitle">120 pts</Text>
                                        <Text size="p2" weight="font-normal" variant="subTitle-sub" color="text-content-secondary">Puntos</Text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-4">
                                <Text size="h3" weight="font-semibold" variant="title">Curso unido</Text>

                                <div className="flex flex-col max-h-[450px] overflow-auto w-full gap-5">
                                    {
                                        data.map((item) => (
                                            <div key={item.id} className="border rounded-2xl items-center border-stroke-primary py-1 flex flex-row w-full justify-between">
                                                <div className="flex w-full gap-3 pl-1">
                                                    <div className="relative w-[30%] min-h-[100px]">
                                                        <ImageBlur src={item.course.img} alt="Course - (Avanzu)" className="object-cover object-center rounded-xl" fill />
                                                    </div>
                                                    <div className="flex flex-col justify-center gap-2">
                                                        <Text size="p1" weight="font-semibold" variant="title">{item.course.name}</Text>
                                                        <Text size="p2" weight="font-normal" variant="subTitle" color="text-content-secondary">{item.course.date}</Text>
                                                    </div>
                                                </div>
                                                <div className="w-[50%] flex justify-end pr-4">
                                                    {
                                                        item.done ?
                                                            <Button onClick={() => setCertif(item.certif)} size="btn2" type="button" variant="secondary-subtle">
                                                                Ver certificado
                                                            </Button>
                                                            :
                                                            <div className="border border-orange-200 rounded-3xl p-2">
                                                                <Text size="cpt1" weight="font-medium" color="text-orange-200">En curso</Text>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                }
            </Modal>
        </>
    );
}

export default ModalEstudianteSingle;

const data = [
    {
        id: 1,
        certif: '/assets/dashboard/certif.svg',
        course: {
            img: '/assets/cursos/course-img.png',
            name: 'React Desde Cero',
            date: '15/02/2024 3:36 AM'
        },
        done: true
    },
    {
        id: 2,
        certif: '/assets/dashboard/certif.svg',
        course: {
            img: '/assets/cursos/course-img.png',
            name: 'React Desde Cero',
            date: '15/02/2024 3:36 AM'
        },
        done: false
    },
    {
        id: 3,
        certif: '/assets/dashboard/certif.svg',
        course: {
            img: '/assets/cursos/course-img.png',
            name: 'React Desde Cero',
            date: '15/02/2024 3:36 AM'
        },
        done: false
    },
    {
        id: 4,
        certif: '/assets/dashboard/certif.svg',
        course: {
            img: '/assets/cursos/course-img.png',
            name: 'React Desde Cero',
            date: '15/02/2024 3:36 AM'
        },
        done: true
    }
]