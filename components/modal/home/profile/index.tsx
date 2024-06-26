import ImageBlur from "@components/dynamic-blur";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const ModalProfile = ({
    open,
    setOpen
}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<{ open: boolean, isScrolled: boolean, profile: boolean, cart: boolean }>>
}) => {
    return (
        <>
            <Modal
                open={open}
                onClick={() => { }}
                color="bg-purple-100"
                onOutsideClick={() => {
                    setOpen(prevState => ({
                        ...prevState,
                        profile: false
                    }))
                }}
                className="max-w-[400px] transform  overflow-y-auto max-h-[530px]"
                position="-translate-x-10 translate-y-36"
                placement="absolute"
            >
                <div className="w-full -mt-8 flex flex-col pb-2 gap-4">
                    <div className="flex flex-row w-full gap-2 px-6">
                        <div className="rounded-full p-3 relative w-14 min-h-full">
                            {/* <Image src={
                                    userInfo.profilePicture === ''
                                        ? userInfo.name === ''
                                            ? `${URL_DUMMY_IMAGE}?name=user&size=120`
                                            : `${URL_DUMMY_IMAGE}?name=${userInfo.name}&size=120`
                                        : userInfo.profilePicture
                                } alt="Person Image - (Avanzu)" fill className="object-cover rounded-full object-center" /> */}
                            <ImageBlur src={`${URL_DUMMY_IMAGE}?name=user&size=120`} alt="Person Image - (Avanzu)" fill className="object-cover rounded-full object-center" />
                        </div>
                        <div className="flex flex-col w-full justify-between">
                            <Text size="p2" weight="font-semibold" variant="title">Bima xavier</Text>
                            <Text size="p3" weight="font-normal" variant="subTitle" color="text-content-secondary">bimasp31r@gmail.com</Text>
                        </div>
                    </div>
                    <div className="w-full bg-stroke-primary h-border" />
                    <div className="flex flex-col gap-4 px-6">
                        <Link href={'/dashboard/configuracion-de-cuenta'}>
                            <Text size="p3" weight="font-medium" color="text-content-secondary">Configuración de cuenta</Text>
                        </Link>
                        <Link href={'/dashboard/perfil-publico'}>
                            <Text size="p3" weight="font-medium" color="text-content-secondary">Perfil público</Text>
                        </Link>
                        <Link href={'/dashboard/editar-perfil'}>
                            <Text size="p3" weight="font-medium" color="text-content-secondary">Editar perfil</Text>
                        </Link>
                        <Link href={'/editar-perfil'}>
                            <Text size="p3" weight="font-medium" color="text-content-secondary">Ayuda</Text>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalProfile;