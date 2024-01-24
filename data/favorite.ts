"use server";

import { db } from "@/lib/db";

export const getFavorites = async (user: string) => {
  try {
    const favorites = await db.favorite.findMany({
      where: {
        userId: user,
      },
    });

    return favorites;
  } catch (error: any) {
    console.log("failed to fetch favorites", error);
  }
};
