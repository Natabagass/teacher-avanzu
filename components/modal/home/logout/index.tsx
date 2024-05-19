import Button from "@components/button";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { signOut } from "next-auth/react";
import { SetStateAction } from "react";

const ModalLogout = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<SetStateAction<boolean>> }) => {
    const logout = async () => {
        await signOut({
            redirect: true,
            callbackUrl: '/login'
        })
    }

    return (
        <Modal
            open={open}
            onClick={() => { }}
            placement="center"
            color="bg-purple-100"
            title="¿Está seguro de que desea cerrar sesión?"
        >
            <div className="w-full">
                <Text weight="font-normal" size="p2" color="text-content-secondary">Haga clic en Cerrar sesión</Text>
                <div className="flex flex-row w-full gap-2 mt-4">
                    <Button size="btn1" className="w-full" variant="secondary-subtle" padding="py-4 px-2" type="button" onClick={() => setOpen(false)}>Cancelar</Button>
                    <Button size="btn1" className="w-full" variant="primary" type="button" padding="py-4 px-2" onClick={() => logout()}>cerrar sesión</Button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalLogout;