import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, { message: 'Correo electronico es requerido' }).email('El correo electrónico es invalido'),
    password: z.string().min(1, { message: 'Se requiere contraseña' }),
    rememberMe: z.coerce.boolean().optional()
})

export type LoginSchema = z.infer<typeof loginSchema>
