import { z } from "zod";

export const createCourseSchema = z.object({
    email: z.string().min(1, { message: 'Correo electronico es requerido' }).email('El correo electrónico es invalido'),
    password: z.string().min(1, { message: 'Se requiere contraseña' }),
    rememberMe: z.coerce.boolean().optional()
})

export type CreateCourseSchema = z.infer<typeof createCourseSchema>
