import { create } from 'zustand'
import { getUserCart } from '../../service/apiRequest'

type State = {
    firstName: string
    lastName: string
  }
  
  type Action = {
    updateFirstName: (firstName: State['firstName']) => void
    updateLastName: (lastName: State['lastName']) => void
  }




const useUpdate = create<State & Action>((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
    updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  }))

  export default useUpdate;

  

  export type cart ={
    id:number,
    useriod:number,
    productId:number
    quantity: number
    image:string
    product:{
      description:string
      id:number
      price:7000
      user:any
    }
  }

  interface cartItems {
    cartItems: cart[];
    setCartItems: (isTrue: boolean) => void;
  }
  export const cart = create<cartItems>((set) => ({
    // id: '',
    // user: '',
    // userId: '',
    // product: '',
    // productId: '',
    // quantity: 0,
    cartItems: [],
    setCartItems: (data:any) => set({ cartItems: data }),
  }));




  interface CartModal {
    isShown: boolean;
    setCartModal: (isTrue: boolean) => void;
  }
  export const cartModal = create<CartModal>((set) => ({
    isShown: false,
    setCartModal: (isTrue:boolean) => set({ isShown: isTrue }),
  }));

