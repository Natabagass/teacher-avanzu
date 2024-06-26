import Button from "@components/button";
import ImageBlur from "@components/dynamic-blur";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { useModal } from "@hooks/modal-global";
import Image from "next/image";
import { SetStateAction } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { TbDownload, TbExclamationCircle, TbLink, TbTrash } from "react-icons/tb";

const ModalChangeBackground = ({
    open,
    setOpen,
    file,
    submit,
    deleteBackground,
    setSelectedFile,
    setPhoto,
    loading
}: {
    open: boolean,
    loading: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>,
    file: string,
    deleteBackground: () => void,
    setSelectedFile: any,
    setPhoto: React.Dispatch<SetStateAction<string>>
    submit: () => void
}) => {
    const { setModal } = useModal()
    return (
        <Modal
            onClick={() => { }}
            open={open}
            placement="center"
            title="Foto de Perfil"
            color="bg-purple-100"
            width="w-medium"
            background={true}
            onOutsideClick={() => setOpen(false)}
        >
            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-row items-end w-full gap-2 bg-purple-300">
                    <div className="w-full relative h-[430px] ">
                        <ImageBlur src={file || '/assets/profile/bg.png'} alt="Image" fill className="object-contain object-center" />
                        <div className="w-full flex justify-end gap-1 items-end h-full pb-4 pr-4">
                            <TbExclamationCircle className="text-lg text-orange-200 " />
                            <Text size="cpt1" color="text-content-secondary" weight="font-normal">720x430 píxeles</Text>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row px-4 pb-4 items-center w-full justify-between">
                    <div
                        onClick={() => {
                            setOpen(false)
                            setPhoto('')
                            setModal({
                                placement: 'center',
                                type: 'function',
                                title: '¿Has terminado esta clase?',
                                subTitle: 'En caso afirmativo, seleccione completo',
                                function: () => {
                                    setOpen(true)
                                },
                                button2: 'Completo'
                            })
                        }}
                        className="rounded-full bg-purple-300 p-3">
                        <TbTrash className="text-lg text-white" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <Button size="btn2" className="w-full" variant="secondary-subtle" disable={loading} padding="py-4 px-6" type="button"
                            onClick={() => {
                                setSelectedFile('')
                                setPhoto('')
                                setOpen(false)
                            }}
                        >Cancelar</Button>
                        <Button
                            size="btn2"
                            disable={loading}
                            className="w-full"
                            variant="primary"
                            type="button"
                            onClick={() => {
                                if (file === '') {
                                    deleteBackground()
                                } else {
                                    submit()
                                }
                            }}
                            padding="py-4 px-6" >
                            {
                                loading ?
                                    <div className="flex flex-row w-full justify-center items-center gap-2">
                                        <Text weight="font-medium" color="text-stroke-primary" size="p2">Cargando</Text>
                                        <BiLoaderCircle className="animate-spin text-stroke-primary text-lg" />
                                    </div>
                                    :
                                    'Aplicar'
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalChangeBackground;
