import { create } from 'zustand';
import { getUserCart } from '../../service/apiRequest';

type State = {
  firstName: string;
  lastName: string;
};

type Actions = {
  updateFirstName: (firstName: string) => void;
  updateLastName: (lastName: string) => void;
};

const useUpdate = create<State & Actions>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set({ firstName }),
  updateLastName: (lastName) => set({ lastName }),
}));

export default useUpdate;

export type CartItem = {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  product: {
    name: string;
    description: string;
    image: string;
    id: number;
    price: number;
    user: any;
  };
};

interface CartState {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
}

export const useCart = create<CartState>((set) => ({
  // cartItems: [
  //   {
  //     id: 0,
  //     userId: 0,
  //     productId: 0,
  //     quantity: 0,
  //     product: {
  //       name: "Nike blazer",
  //       price: 290,
  //       description: "Nike blazer...",
  //       image: "/images/p/p1.png",
  //       id: 0,
  //       user: null,
  //     },
  //   },
  //   {
  //     id: 0,
  //     userId: 0,
  //     productId: 0,
  //     quantity: 0,
  //     product: {
  //       name: "Adidas samba",
  //       price: 290,
  //       description: "Adidas samba...",
  //       image: "/images/p/p2.png",
  //       id: 0,
  //       user: null,
  //     },
  //   },
  //   {
  //     id: 0,
  //     userId: 0,
  //     productId: 0,
  //     quantity: 0,
  //     product: {
  //       name: "Converse",
  //       price: 290,
  //       description: "Converse...",
  //       image: "/images/p/p3.png",
  //       id: 0,
  //       user: null,
  //     },
  //   },
  //   // Add other initial cart items here
  // ],
  cartItems:[],
  setCartItems: (cartItems) => set({ cartItems }),
}));

interface CartModalState {
  isShown: boolean;
  setCartModal: (isShown: boolean) => void;
}

export const useCartModal = create<CartModalState>((set) => ({
  isShown: false,
  setCartModal: (isShown) => set({ isShown }),
}));

interface Imodal{
  isOpen: boolean;
  setShowModal: (isOpen: boolean) => void;
}

export const useModal = create<Imodal>((set) => ({
  isOpen: false,
  setShowModal: (isOpen) => set({ isOpen }),
}));


/* for search */
interface IProduct {
  name: string;
  description: string;
  image: string;
  id: number;
  price: number;
  user?: any;
}

interface IProductSetter {
  product: IProduct[]
  setProduct:(product:IProduct[])=>void
}

export const useProduct = create<IProductSetter>((set)=>({
  // product:[ {
  //   id: 0,
  //   name: "Nike Blazer",
  //   price: 290,
  //   description: "Nike Blazer...",
  //   image: "/images/p/p1.png"
  // },
  // {
  //   id: 1,
  //   name: "Adidas Samba",
  //   price: 2000,
  //   description: "Adidas Samba...",
  //   image: "/images/p/p2.png"
  // },
  // {
  //   id: 2,
  //   name: "Vans Slip on",
  //   price: 2000,
  //   description: "Vans Slip on...",
  //   image: "/images/p/p3.png"
  // },
  // {
  //   id: 0,
  //   name: "Nike Blazer",
  //   price: 290,
  //   description: "Nike Blazer...",
  //   image: "/images/p/p1.png"
  // },
  // {
  //   id: 1,
  //   name: "Adidas Samba",
  //   price: 2000,
  //   description: "Adidas Samba...",
  //   image: "/images/p/p2.png"
  // },
  // {
  //   id: 2,
  //   name: "Vans Slip on",
  //   price: 2000,
  //   description: "Vans Slip on...",
  //   image: "/images/p/p3.png"
  // }],
  product:[],
  setProduct: (product:IProduct[] | []) => set({product}),
}))

interface Isearch{
  isOpen: boolean;
  setSearch: (isOpen: boolean) => void;
}

/* end for search */


export const useSearch = create<Isearch>((set) => ({
  isOpen: false,
  setSearch: (isOpen) => set({ isOpen }),
}));
