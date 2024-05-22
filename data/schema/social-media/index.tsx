import { z } from "zod";

export const socialMediaSchema = z.object({
    linkedin: z.string().url(),
    github: z.string().url(),
    web: z.string().url(),
    twitter: z.string().url(),
    facebook: z.string().url()
})


export type SocialMediaSchema = z.infer<typeof socialMediaSchema>