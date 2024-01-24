"use server";

import { db } from "@/lib/db";
import { IFavoriteAnime } from "@/types";

export const favoriteAnime = async ({
  image,
  title,
  user,
  description,
}: IFavoriteAnime) => {
  try {
    const existingFavorite = await db.favorite.findFirst({
      where: {
        userId: user,
        title: title,
      },
    });

    if (existingFavorite) return { error: "favorite already exists" };

    await db.favorite.create({
      data: {
        image: image,
        title: title,
        description: description,
        isFavorited: true,
        user: {
          connect: { id: user },
        },
      },
    });
    console.log("sucess");
    return { success: "Favorited" };
  } catch (error: any) {
    console.log("failed to add to favorite", error);
  }
};
