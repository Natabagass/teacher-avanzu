import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@hooks/modal-global";
import { socialMediaSchema, SocialMediaSchema } from "data/schema/social-media";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLoaderCircle } from "react-icons/bi";

const SocialMediaChange = () => {
    const { register, formState: { errors, isSubmitting }, handleSubmit, setError } = useForm<SocialMediaSchema>({
        defaultValues: async () => {
            return fetch(`/api/users/socials`, {
                method: 'GET'
            })
            .then((res: any) => res.json())
            .then((data: any) => {
                return {
                    facebook: data.facebook,
                    linkedin: data.linkedin,
                    web: data.web,
                    github: data.github,
                    twitter: data.twitter
                }
            })
        },
        resolver: zodResolver(socialMediaSchema),
        mode: 'onChange'
    })
    const { setModal } = useModal()

    const onSubmit: SubmitHandler<SocialMediaSchema> = async (data) => {
        try {
            const res = await fetch(`/api/users/socials`, {
                method: 'PUT',
                body: JSON.stringify(data)
            });
            const datas = await res.json()
            if (datas.code === 200) {
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    subTitle: 'actualizar el éxito de las redes sociales',
                })
            }
            setError('root', datas.errors)
        } catch (error: any) {
            setError('root', error.response.data.errors)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full mt-8 gap-4">
                <Input
                    register={register}
                    error={errors}
                    leftIcon={false}
                    name="facebook"
                    label="Facebook"
                />

                <Input
                    register={register}
                    error={errors}
                    leftIcon={false}
                    name="twitter"
                    label="Twitter"
                />

                <Input
                    register={register}
                    error={errors}
                    leftIcon={false}
                    name="linkedin"
                    label="Linkedin"
                />

                <Input
                    register={register}
                    error={errors}
                    leftIcon={false}
                    name="web"
                    label="Web"
                />

                <Input
                    register={register}
                    error={errors}
                    leftIcon={false}
                    name="github"
                    label="Github"
                />

                <div className="w-full flex justify-end">
                    <Button
                        type="submit"
                        disable={isSubmitting}
                        variant="primary"
                        size="btn2"
                        padding="px-3 py-4"
                    >
                        {
                            isSubmitting ?
                                <div className="flex flex-row w-full justify-center items-center gap-2">
                                    <Text weight="font-medium" color="text-stroke-primary" size="p2">Cargando</Text>
                                    <BiLoaderCircle className="animate-spin text-stroke-primary text-lg" />
                                </div>
                                :
                                'Actualizar el perfil'
                        }
                    </Button>
                </div>
            </form>
        </>
    );
}

export default SocialMediaChange;