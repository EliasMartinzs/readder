"use server";

import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email: email } });

    return user;
  } catch (error: any) {
    console.log("Failed to find user", error);
  }
};
