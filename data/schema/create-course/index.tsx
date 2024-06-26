import { z } from "zod";

const lessonSchema = z.object({
    title: z.string(),
    description: z.string(),
    video: z.string(),
    id: z.number(),
    attachment: z.string(),
    order: z.number().int(),
});

const answerScehma = z.object({
    answer: z.string(),
    isAnswer: z.boolean().optional()
})

const questionSchema = z.object({
    type: z.string(),
    question: z.string(),
    id: z.number(),
    description: z.string().optional(),
    answers: z.array(answerScehma).optional()
})

const quizSchema = z.object({
    title: z.string(),
    order: z.number(),
    id: z.number(),
    attachment: z.string(),
    questions: z.array(questionSchema)
})

const moduleSchema = z.object({
    title: z.string(),
    order: z.number(),
    lessons: z.array(lessonSchema),
    quizzes: z.array(quizSchema)
});

export const createCourseSchema = z.object({
    thumbnail: z.string({ required_error: 'Se requiere miniatura' }),
    title: z.string().min(1, { message: 'Título es requerido' }),
    description: z.string().min(1, { message: 'Descripción es requerido' }),
    hashtags: z.string({  required_error: 'Etiqueta es requerido' }).min(1, { message: 'Etiqueta es requerido' }),
    level: z.enum(["Principiante", "Intermedio", "Avanzado", "Advance", "Beginner", "Intermediate"], {
        errorMap: (issues, ctx) => ({ message: 'Seleccione el tipo primero' }),
    }),
    categories: z.array(z.string({ invalid_type_error: 'La categoria es requerida' })).nonempty({ message: 'La categoria es requerida' }),
    free: z.boolean({ required_error: "Se requiere gratis" }),
    price: z.number({ required_error: 'Se requiere precio' }).min(1, { message: 'Se requiere precio' }),
    modules: z.array(moduleSchema)
})

export type CreateCourseSchema = z.infer<typeof createCourseSchema>
