"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success)
    return {
      error: "Invalid credentials!",
    };

  const { email, name, password } = validatedField.data;

  const hashedPassowrd = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser)
    return {
      error: "Email is already being used!",
    };

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassowrd,
      },
    });

    return { success: "User successfully created" };
  } catch (error: any) {
    console.log("Failed to create user", error);
  }
};
