import Text from "@components/text";
import { Dispatch, SetStateAction } from "react";
import ModalSetAttempts from "./set-attempt";
import { useModal } from "@hooks/modal-global";

const ModalMoreDetalles = ({
    open,
    setOpen
}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const { setModal } = useModal()
    const cancelar = async () => {
        setModal({
            type: 'loading',
            placement: 'center'
        })
        // setModal({
        //     type:'success',
        //     placement: 'center',
        //     title: 'Esta promoción se eliminó correctamente',
        //     subTitle: 'Su reembolso se procesa',
        //     desc: 'Puedes crear promoción nuevamente',
        // })
    }

    return (
        <div className="bg-purple-200 p-2 border border-stroke-primary rounded-lg">
            <div className="flex flex-col gap-2">
                <div onClick={() => setOpen(!open)} className="flex cursor-pointer flex-row items-center gap-2">
                    <Text weight="font-medium" size="p3">Establecer intentos</Text>
                </div>
                <div
                    onClick={() =>
                        setModal({
                            placement: "center",
                            type: "function",
                            title: "¿Quieres establecer ilimitada?",
                            subTitle: "los intentos se establecerán ilimitados",
                            button2: 'Confirmar',
                            function: () => {
                                cancelar()
                            }
                        })
                    }
                    className="flex cursor-pointer flex-row items-center gap-2">
                    <Text weight="font-medium" size="p3">Establecer en Ilimitado</Text>
                </div>
            </div>
            <ModalSetAttempts
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}

export default ModalMoreDetalles;