import { z } from "zod";

export const updateProfileSchema = z.object({
    firstName: z.string().optional(),
    name: z.string().optional(),
    lastName: z.string().optional(),
    type: z.enum(["CC", "CE", "TI", "Passporte"], {
        errorMap: (issues, ctx) => ({ message: 'Select Credential First' }),
    }).optional(),
    credential: z.string().optional(),
    displayName: z.string().optional(),
    biography: z.string().optional(),
    phoneNumber: z.string().optional(),
    occupation: z.string().optional(),
})


export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>
