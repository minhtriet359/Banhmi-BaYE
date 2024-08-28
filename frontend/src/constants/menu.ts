import banhmi from '../assets/menu-banhmi.jpg';
import tea from '../assets/menu-tea.jpg';
import coffee from '../assets/menu-coffee.jpeg';
import boba from '../assets/menu-boba.jpg';
import pastries from '../assets/menu-pastries.webp';

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type MenuSubsection = {
  name: string;
  image: string;
  items: MenuItem[];
};

type MenuSection = {
  name: string;
  image?: string;
  subsections?: MenuSubsection[];
  items?: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    name: "BÁNH MÌ",
    image: banhmi,
    items: [
      {
        id: 1,
        name: "Ba-Ye Combo (Ba-Ye Đặc Biệt)",
        description: "",
        price: 7.95,
      },
      {
        id: 2,
        name: "Grilled Pork (Heo Nướng)",
        description: "",
        price: 7.95,
      },
      {
        id: 3,
        name: "Grilled Beef (Bò Nướng)",
        description: "",
        price: 7.95,
      },
      {
        id: 4,
        name: "Grilled Chicken (Gà Nướng)",
        description: "",
        price: 7.95,
      },
      {
        id: 5,
        name: "Veggie (Chay)",
        description: "",
        price: 7.95,
      },
      {
        id: 6,
        name: "Crispy Pork Belly",
        description: "",
        price: 7.95,
      },
      {
        id: 7,
        name: "Pork Meatball (Xíu Mại)",
        description: "",
        price: 7.95,
      },
    ],
  },
  {
    name: "DRINKS",
    subsections: [
      {
        name: "SPECIAL TEAS",
        image: tea,
        items: [
          {
            id: 8,
            name: "Matcha Tea",
            description: "",
            price: 0,
          },
          {
            id: 9,
            name: "Peach Tea",
            description: "",
            price: 0,
          },
          {
            id: 10,
            name: "Kumquat Tea",
            description: "",
            price: 0,
          },
          {
            id: 11,
            name: "Salty Lemon",
            description: "",
            price: 0,
          },
        ],
      },
      {
        name: "COFFEE",
        image: coffee,
        items: [
          {
            id: 12,
            name: "Iced / Hot Black Coffee",
            description: "",
            price: 0,
          },
          {
            id: 13,
            name: "Iced / Hot Milk Coffee – Café Sua Da / Nong",
            description: "",
            price: 0,
          },
        ],
      },
      {
        name: "SPECIAL BOBA DRINKS",
        image: boba,
        items: [
          {
            id: 14,
            name: "Ube Milk Boba",
            description: "",
            price: 0,
          },
          {
            id: 15,
            name: "Creamy Thai Iced Boba",
            description: "",
            price: 0,
          },
          {
            id: 16,
            name: "Matcha Boba",
            description: "",
            price: 0,
          },
          {
            id: 17,
            name: "Strawberry Milk Boba",
            description: "",
            price: 0,
          },
        ],
      },
    ],
  },
  {
    name: "PASTRIES",
    image: pastries,
    items: [
      {
        id: 18,
        name: "Plain Croissant",
        description: "",
        price: 0,
      },
      {
        id: 19,
        name: "Butter Croissant",
        description: "",
        price: 0,
      },
      {
        id: 20,
        name: "Butter Croissant",
        description: "",
        price: 0,
      },
      {
        id: 21,
        name: "Chicken Ba-Ye Banh Bao",
        description: "",
        price: 0,
      },
      {
        id: 22,
        name: "Pork Ba-Ye Banh Bao",
        description: "",
        price: 0,
      },
      {
        id: 23,
        name: "Mozarella Ba-Ye Banh Bao",
        description: "",
        price: 0,
      },
    ],
  },
];