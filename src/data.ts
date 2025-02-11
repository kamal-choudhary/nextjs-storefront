import { Product } from "./interfaces"

const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const products: Product[] = [
  {
    id: "1",
    name: "Earthen Bottle",
    price: 48,
    imageSrc: "/earthen-bottle.jpg",
    imageAlt: "Earthen Bottle Alt",
    slug: "earthen-bottle",
    description: descriptionText
  },
  {
    id: "2",
    name: "Nomad Tumbler",
    price: 35,
    imageSrc: "/nomad-tumbler.jpg",
    imageAlt: "Nomad Tumbler Alt",
    slug: "nomad-tumbler",
    description: descriptionText
  },
  {
    id: "3",
    name: "Focus Paper Refill",
    price: 89,
    imageSrc: "/focus-paper-refill.jpg",
    imageAlt: "Focus Paper Refill Alt",
    slug: "focus-paper-refill",
    description: descriptionText
  },
  {
    id: "4",
    name: "Machined Mechanical Pencil",
    price: 35,
    imageSrc: "/machined-mechanical-pencil.jpg",
    imageAlt: "Machined Mechanical Pencil Alt",
    slug: "machined-mechanical-pencil",
    description: descriptionText
  },
  {
    id: "5",
    name: "Focus Card Tray",
    price: 64,
    imageSrc: "/focus-card-tray.jpg",
    imageAlt: "Focus Card Tray Alt",
    slug: "focus-card-tray",
    description: descriptionText
  },
  {
    id: "6",
    name: "Focus Multi Pack",
    price: 39,
    imageSrc: "/focus-multi-pack.jpg",
    imageAlt: "Focus Multi Pack Alt",
    slug: "focus-multi-pack",
    description: descriptionText
  },
  {
    id: "7",
    name: "Brass Scissors",
    price: 50,
    imageSrc: "/brass-scissors.jpg",
    imageAlt: "Brass Scissors Alt",
    slug: "brass-scissors",
    description: descriptionText
  },
  {
    id: "8",
    name: "Focus Carry Pouch",
    price: 32,
    imageSrc: "/focus-carry-pouch.jpg",
    imageAlt: "Focus Carry Pouch Alt",
    slug: "focus-carry-pouch",
    description: descriptionText
  }
]
