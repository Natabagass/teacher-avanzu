import { z } from "zod";

const lessonSchema = z.object({
    title: z.string(),
    description: z.string(),
    video: z.string(),
    attachment: z.string(),
    order: z.number().int(),
});

const moduleSchema = z.object({
    title: z.string(),
    order: z.number(),
    lessons: z.array(lessonSchema)
});

export const createCourseSchema = z.object({
    thumbnail: z.string(),
    title: z.string().min(1, { message: 'Título es requerido' }),
    description: z.string().min(1, { message: 'Descripción es requerido' }),
    hashtags: z.string().min(1, { message: 'Título es requerido' }),
    level: z.enum(["Principiante", "Intermedio", "Avanzado", "Advance", "Beginner", "Intermediate"], {
        errorMap: (issues, ctx) => ({ message: 'Seleccione el tipo primero' }),
    }),
    categories: z.array(z.string()).nonempty({ message: 'La categoria es requerida' }),
    free: z.boolean({ required_error: "Se requiere gratis" }),
    price: z.number().min(1, { message: 'Se requiere precio' }),
    modules: z.array(moduleSchema)
})

export type CreateCourseSchema = z.infer<typeof createCourseSchema>
