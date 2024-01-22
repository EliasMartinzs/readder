import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string(),
});

export const LoginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string(),
});
