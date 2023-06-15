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


  


  export const cart = create((set) => ({
    id: '',
    user: '',
    userId: '',
    product: '',
    productId: '',
    quantity: 0,
    cartItems: [],
    setCartItems: (data:any) => set({ cartItems: data }),
  }));






export default useUpdate;