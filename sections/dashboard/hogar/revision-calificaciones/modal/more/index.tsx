import Text from "@components/text";
import { useModal } from "@hooks/modal-global";
import { TbTrash } from "react-icons/tb";

const ModalMoreRevision = () => {
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
                <div
                    onClick={() =>
                        setModal({
                            placement: "center",
                            type: "function",
                            title: "¿Has terminado esta clase?",
                            subTitle: "haga clic en cambiar si desea cambiarlo",
                            button2: 'Borrar',
                            function: () => {
                                cancelar()
                            }
                        })
                    }
                    className="flex cursor-pointer flex-row items-center gap-2">
                    <TbTrash className="text-white text-lg" />
                    <Text weight="font-medium" size="p3">Borrar</Text>
                </div>
            </div>
        </div>
    );
}

export default ModalMoreRevision;