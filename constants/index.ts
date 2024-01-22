const menu = [
  {
    title: "Animes",
    subtitle: "Category",
    items: [
      {
        label: "all",
      },
      {
        label: "airing",
      },
      {
        label: "Upcoming",
      },
      {
        label: "tv",
      },
      {
        label: "movie",
      },
      {
        label: "ova",
      },
      {
        label: "special",
      },
      {
        label: "bypopularity",
      },
    ],
  },
  {
    title: "Mangas",
    subtitle: "Category",
    items: [
      {
        label: "all",
      },
      {
        label: "mangas",
      },
      {
        label: "oneshot",
      },
      {
        label: "doujin",
      },
      {
        label: "lightnovels",
      },
      {
        label: "novels",
      },
      {
        label: "manhwa",
      },
      {
        label: "manhua",
      },
      {
        label: "bypopularity",
      },
    ],
  },
];

const animes = [
  {
    title: "Animes",
    subtitle: "Category",
    items: [
      {
        label: "all",
      },
      {
        label: "airing",
      },
      {
        label: "Upcoming",
      },
      {
        label: "tv",
      },
      {
        label: "movie",
      },
      {
        label: "ova",
      },
      {
        label: "special",
      },
      {
        label: "bypopularity",
      },
    ],
  },
] as const;

const mangas = [
  {
    title: "Mangas",
    subtitle: "Category",
    items: [
      {
        label: "all",
      },
      {
        label: "mangas",
      },
      {
        label: "oneshot",
      },
      {
        label: "doujin",
      },
      {
        label: "lightnovels",
      },
      {
        label: "novels",
      },
      {
        label: "manhwa",
      },
      {
        label: "manhua",
      },
      {
        label: "bypopularity",
      },
    ],
  },
];

const heroAnimes = [
  {
    label: "Mashle: Magic And Muscles",
    mobileBanner: "/mashle.webp",
    desktopBanner: "/mashle-desktop.webp",
    genre: ["comedy-action", "fantasy"],
    description:
      "a comedic fantasy that follows a teenager named Mash Vandead, with well-defined muscles but no magical ability whatsoever. This, of course, is an issue. In this world, magical skill determines your societal rank.",
  },
  {
    label: "Moonrise",
    mobileBanner: "/moonrise.webp",
    desktopBanner: "/moonrise-desktop.webp",
    genre: ["action", "adventure"],
    description:
      "A young man from Earth enlists in the army to attack rebels on the Moon, only to find that his former best friend has become his enemy. A young man from Earth enlists in the army to attack rebels on the Moon, only to find that his former best friend has become his enemy.",
  },
  {
    label: "The Witch And The Beast",
    mobileBanner: "/the-witch.webp",
    desktopBanner: "/the-witch-desktop.webp",
    genre: ["adventur", "dark fantasy", "thriller"],
    description:
      "A cursed girl and a mysterious man join forces to hunt down an evil witch. A cursed girl and a mysterious man join forces to hunt down an evil witch",
  },
  {
    label: "Bucchigiri?!",
    mobileBanner: "/bucchigiri.webp",
    desktopBanner: "/bucchigiri-desktop.webp",
    genre: ["fantasy"],
    description:
      "Araji Tomobishi gets caught up in battles among powerful individuals after reuniting with his former friend Mataka Asamine. Meanwhile, the shadow of a colossal demon appears...?!. Araji Tomobishi gets caught up in battles among powerful individuals after reuniting with his former friend Mataka Asamine.",
  },
  {
    label: "Kaiju No. 8",
    mobileBanner: "/kaiju.webp",
    desktopBanner: "/kaiju-desktop.webp",
    genre: ["action", "adventure"],
    description:
      "n Japan, monsters known as kaiju regularly attack the populace with the Japanese Defense Force tasked with killing them. After their town was destroyed by kaiju when they were children, childhood friends Kafka Hibino and Mina Ashiro both vowed to become members of the Defense Force.",
  },
  {
    label: "Bleach: Thousand-Year Blood War – Part 3",
    mobileBanner: "/bleach.webp",
    desktopBanner: "/bleach-desktop.webp",
    genre: ["adventure", "martial arts", "supernatural"],
    description:
      "continues the war of the Quincy and Soul Reapers. We are now past—the succession of the infiltration of the Soul Society. Now, the enemy, The Quincy, is at the Soul King Palace, and our heroes are not racing to get to the Soul King.",
  },
];

const breakpoint = {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
};

const footerItems = [
  {
    category: "Navigation",
    items: [
      { name: "Top Animes", href: "/popular-series" },
      { name: "Top Mangas", href: "/simulcast-series" },
      { name: "Releases", href: "/" },
    ],
  },
  {
    category: "Contact and Social Media",
    items: [
      { name: "Contact Us", href: "/" },
      { name: "YouTube", href: "https://www.youtube.com" },
      { name: "Facebook", href: "https://www.facebook.com" },
      { name: "Twitter", href: "https://www.twitter.com" },
      { name: "Instagram", href: "https://www.instagram.com" },
      { name: "TikTok", href: "https://www.tiktok.com" },
    ],
  },
  {
    category: "Readder",
    items: [
      { name: "About", href: "/" },
      { name: "Help/FAQ", href: "/" },
      { name: "Terms of Use", href: "/" },
      { name: "Privacy Policy", href: "/" },
      { name: "Cookie Consent Tool", href: "/" },
      { name: "Press Inquiries", href: "/" },
    ],
  },
  {
    category: "More",
    items: [
      { name: "Download the App", href: "/" },
      { name: "Redeem Code", href: "/" },
      { name: "Jobs", href: "/jobs" },
    ],
  },
  {
    category: "Account",
    items: [
      { name: "Create Account", href: "/auth/register" },
      { name: "Login", href: "/auth/login" },
    ],
  },
];

export { animes, mangas, menu, heroAnimes, breakpoint, footerItems };
