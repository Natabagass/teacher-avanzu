import { z } from "zod";

export const passwordChangeSchema = z.object({
    currentPassword: z.string().min(8, { message: 'La longitud mínima de la contraseña es 8' }),
    password: z.string().min(8, { message: 'La longitud mínima de la contraseña es 8' }),
    passwordConfirmation: z.string({ required_error: 'Se requiere contraseña de confirmación' }).min(1, { message: 'Se requiere contraseña de confirmación' }),
})


export type PasswordChangeSchema = z.infer<typeof passwordChangeSchema>