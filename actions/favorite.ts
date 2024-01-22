"use server";

import { db } from "@/lib/db";

interface IFavoriteAnime {
  uid: number;
  title: string;
  image: string;
  description?: string;
  user: string;
}

export const favoriteAnime = async ({
  image,
  title,
  uid,
  user,
  description,
}: IFavoriteAnime) => {
  try {
    const existingFavorite = await db.favorite.findFirst({
      where: {
        AND: {
          uid: uid,
          user: {
            id: user,
          },
        },
      },
    });

    if (existingFavorite) return { error: "favorite already exists" };

    await db.favorite.create({
      data: {
        image: image,
        title: title,
        uid: uid,
        description: description,
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
