import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "A valid Email is required")
        .email("Invalid email address"),
});
