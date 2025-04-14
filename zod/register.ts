import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    user_name: z.string().min(1, "Username is required"),
    pin: z.string().min(4, "Pin must be at least 4 digits"),
  });