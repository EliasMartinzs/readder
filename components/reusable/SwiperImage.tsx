import Image from "next/image";

interface ISwiperImage {
  src: string;
  alt: string;
}

export function SwiperImage({ src, alt }: ISwiperImage) {
  return (
    <Image
      src={src || "/not-found.png"}
      alt={alt || "Anime Image"}
      width={225}
      height={318}
      loading="lazy"
      className="object-cover"
      sizes="(min-width: 808px) 50vw, 100vw"
    />
  );
}
