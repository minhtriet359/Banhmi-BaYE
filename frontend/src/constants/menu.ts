import banhmi from '../assets/menu-banhmi.jpg';
import tea from '../assets/menu-tea.jpg';
import coffee from '../assets/menu-coffee.jpeg';
import boba from '../assets/menu-boba.jpg';
import pastries from '../assets/menu-pastries.webp';
import dacbiet from '../assets/banhmidacbiet.jpg'
import bonuong from '../assets/banhmibonuong.jpg'
import ganuong from '../assets/banhmiganuong.jfif'
import heoquay from '../assets/banhmiheoquay.jfif'
import thitnuong from '../assets/banhmithitnuong.jfif'
import xiumai from '../assets/banhmixiumai.jpg'
import caphedenda from '../assets/caphedenda.jpeg'
import caphesuada from '../assets/caphesuada.webp'
import comingsoon from '../assets/comingsoon.png'

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
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
        name: "Ba-Ye Combo (Đặc Biệt)",
        description: "",
        price: 7.95,
        image: dacbiet,
      },
      {
        id: 2,
        name: "Grilled Pork (Heo Nướng)",
        description: "",
        price: 7.95,
        image: thitnuong,
      },
      {
        id: 3,
        name: "Grilled Beef (Bò Nướng)",
        description: "",
        price: 7.95,
        image: bonuong,
      },
      {
        id: 4,
        name: "Grilled Chicken (Gà Nướng)",
        description: "",
        price: 7.95,
        image: ganuong,
      },
      {
        id: 5,
        name: "Veggie (Chay)",
        description: "",
        price: 7.95,
        image: comingsoon,
      },
      {
        id: 6,
        name: "Crispy Pork Belly",
        description: "",
        price: 7.95,
        image: heoquay,
      },
      {
        id: 7,
        name: "Pork Meatball (Xíu Mại)",
        description: "",
        price: 7.95,
        image: xiumai,
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
            image: tea,
          },
          {
            id: 9,
            name: "Peach Tea",
            description: "",
            price: 0,
            image: comingsoon,
          },
          {
            id: 10,
            name: "Kumquat Tea",
            description: "",
            price: 0,
            image: comingsoon,
          },
          {
            id: 11,
            name: "Salty Lemon",
            description: "",
            price: 0,
            image: comingsoon,
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
            image: caphedenda,
          },
          {
            id: 13,
            name: "Iced / Hot Milk Coffee – Café Sua Da / Nong",
            description: "",
            price: 0,
            image: caphesuada,
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
            image: comingsoon,
          },
          {
            id: 15,
            name: "Creamy Thai Iced Boba",
            description: "",
            price: 0,
            image: comingsoon,
          },
          {
            id: 16,
            name: "Matcha Boba",
            description: "",
            price: 0,
            image: comingsoon,
          },
          {
            id: 17,
            name: "Strawberry Milk Boba",
            description: "",
            price: 0,
            image: comingsoon,
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
        image: pastries,
      },
      {
        id: 19,
        name: "Butter Croissant",
        description: "",
        price: 0,
        image: comingsoon,
      },
      {
        id: 20,
        name: "Butter Croissant",
        description: "",
        price: 0,
        image: comingsoon,
      },
      {
        id: 21,
        name: "Chicken Ba-Ye Banh Bao",
        description: "",
        price: 0,
        image: comingsoon,
      },
      {
        id: 22,
        name: "Pork Ba-Ye Banh Bao",
        description: "",
        price: 0,
        image: comingsoon,
      },
      {
        id: 23,
        name: "Mozarella Ba-Ye Banh Bao",
        description: "",
        price: 0,
        image: comingsoon,
      },
    ],
  },
];