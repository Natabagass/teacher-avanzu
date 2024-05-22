import Button from "@components/button";
import Text from "@components/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { NotificacionSchema, notificacionSchema } from "data/schema/profile/notificacion";
import { useForm } from "react-hook-form";

const NotificacionPage = () => {
    const { register, formState: { errors, isSubmitting }, handleSubmit, watch, setError, control } = useForm<NotificacionSchema>({
        resolver: zodResolver(notificacionSchema),
        mode: 'onChange'
    })

    return (
        <div className="flex flex-col w-full gap-8">
            <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col gap-2">
                    <Text size="p1" weight="font-semibold" variant="title">Recursos útiles y actualizaciones importantes relacionadas con el trabajo de instructor </Text>
                    <Text size="p2" weight="font-normal" color="text-content-secondary" variant="subTitle" >Para ajustar esta preferencia por curso, deje esta casilla marcada y vaya a &quot;Configuración del curso&quot; en el panel de gestión del curso para aceptar o rechazar notificaciones específicas.</Text>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-purple-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-neon-green-500"></div>
                </label>
            </div>
            <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col gap-2">
                    <Text size="p1" weight="font-semibold" variant="title">No me envíen correos electrónicos promocionales</Text>
                    <Text size="p2" weight="font-normal" color="text-content-secondary" variant="subTitle" >Si esta casilla está marcada, tenga en cuenta que seguirá recibiendo correos electrónicos de transacciones importantes, como recibos de compra.</Text>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-purple-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-neon-green-500"></div>
                </label>
            </div>
            <div className="flex w-full justify-end">
                <Button
                    variant="primary"
                    type="button"
                    size="btn1"
                    padding="px-6 py-4"
                >
                    Aprobar
                </Button>
            </div>
        </div>
    );
}

export default NotificacionPage;