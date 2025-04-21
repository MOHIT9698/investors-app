// src/zod/loginSchema.ts
import { z } from "zod";

export const loginSchema = z.object({
  user_name: z
    .string()
    .min(8, { message: "Username must be at least 8 characters long" })
    .refine((val) => /[0-9]/.test(val), {
      message: "Username must include at least one number",
    })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: "Username must include at least one special character",
    }),
  pin: z
    .string()
    .nonempty({ message: "Pin is required" })
    .min(4, { message: "Pin must be at least 4 digits" }),
});
export const CreateAccountSchema = z.object({
  name: z
    .string(),
  user_name: z
    .string()
    .nonempty({ message: "name is required" })
    .min(8, { message: "Username must be at least 8 characters long" })
    .refine((val) => /[0-9]/.test(val), {
      message: "Username must include at least one number",
    })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: "Username must include at least one special character",
    }),
  pin: z
    .string()
    .nonempty({ message: "Pin is required" })
    .min(4, { message: "Pin must be at least 4 digits" }),
});


