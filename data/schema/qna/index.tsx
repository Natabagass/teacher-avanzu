import { z } from "zod";

export const qnaSchema = z.object({
    question: z.string().min(3, { message: 'La longitud mínima de la pregunta es 3' }),
})


export type QnaSchema = z.infer<typeof qnaSchema>