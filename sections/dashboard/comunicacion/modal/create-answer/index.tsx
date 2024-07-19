import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@hooks/modal-global";
import { qnaSchema, QnaSchema } from "data/schema/qna";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const CreateAnswerCommunication = ({
    state,
    setState,
    setRefresh
}: {
    state: { open: boolean, id: number, status: boolean, page: number, courseID: number, answer: string, condition: boolean },
    setState: Dispatch<SetStateAction<{ id: number, open: boolean, status: boolean, courseID: number, page: number, answer: string, condition: boolean }>>,
    setRefresh: Dispatch<SetStateAction<boolean>>,
}) => {
    const { register, formState: { errors }, setError, handleSubmit } = useForm<QnaSchema>({
        resolver: zodResolver(qnaSchema),
        mode: 'onChange'
    })
    const { setModal } = useModal()

    const onSubmit: SubmitHandler<QnaSchema> = async (data) => {
        try {
            const res = await fetch(`/api/course-questions/${state.id}/course-question-answers`, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            const datas = await res.json()
            if (datas.code === 200 || datas.code === 201) {
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    subTitle: 'Envió exitosamente la respuesta',
                    function: () => {
                        setRefresh(true)
                        setState({ ...state, open: false, status: false, id: 0, courseID: 0 })
                    }
                })
            }
            setError('root', datas.errors)
        } catch (error: any) {
            setError('root', error.response.data.errors)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full bg-purple-200 rounded-xl border items-center border-stroke-primary p-6 flex flex-col gap-4">
                <Text size="h2" weight="font-bold" variant="title">Ingrese la respuesta</Text>
                <Input
                    register={register}
                    error={errors}
                    type="text"
                    name="question"
                    leftIcon={false}
                    placeholder="Respuesta"
                />
            </div>
            <div className="w-full flex justify-end mt-4">
                <Button size="btn1" variant="primary" type="submit" padding="px-6 py-4">
                    Confirmar
                </Button>
            </div>
        </form>
    );
}

export default CreateAnswerCommunication;