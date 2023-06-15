// 'use client'
import { AiOutlineLeft, AiOutlineShoppingCart } from "react-icons/ai";
import * as React from "react";
import { IProduct, IaddToCart, addToCart, getProducts, getUserCart, postProducts } from "../../../service/apiRequest";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { cart } from "@/lib/State";

export default function Product() {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [quantity, setQuantity] = React.useState(1);
  // const [cartItems, setCartItems] = React.useState([]);
  const [userId, setUserId] = React.useState(null);


  const { data } = useSession();
  const userEmail = data?.user?.email;

  const getAllProduct = async () => {
    await getProducts().then(
      (res) => {
        console.log("sss");
        if (res.data) {
          setProducts(res.data.products);
        } else {
          alert(res.status);
        }
      },
      (error) => alert(error)
    );
  };

  React.useEffect(() => {
    getAllProduct();
  }, []);

  const handleAddToCart = async ({ productId, quantity, userEmail }: IaddToCart) => {
    let params = {
      productId: productId,
      quantity: quantity,
      userEmail: userEmail
    };
    try {
      const res = await addToCart(params);

      console.log("add to cart ", res);

      setUserId(res)


    
    } catch (error) {
      console.error(error);
      alert("Error adding to cart");
    }
  };


  const {id,user,setCartItems,cartItems } = cart();

console.log('cart items', cartItems)
 
  const postProduct = async ()=>{
    await postProducts().then((res)=>{
      console.log('user cart ',res)
      alert('creating successfull')
    },(error)=>{
      console.log(error,' getting cart ')
    })
  }


   const getUserCartItem = async ()=>{
    await getUserCart(userId).then((res)=>{
      console.log('user cart ',res)
      // setCartItems(res.cart)
      setCartItems(res.cart);
      
    },(error)=>{
      console.log(error,' getting cart ')
    })
  }



  React.useEffect(()=>{
    postProduct();
  
    },[])
  

  React.useEffect(()=>{
  getUserCartItem();

  },[userId])

  return (
    <main className="flex  relative">
      {products?.map((p) => {
        return (
          <div
            key={p.id}
            className=" flex  flex-col h-[22rem] w-[20rem] overflow-hidden  p-6 border rounded bg-white shadow  text-black"
          >
            <strong>{p?.name}</strong>

            <div className="w-[100%] h-[150px] border mb-2 border-rose-500 overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                height={100}
                width={350}
                className=""
              />
            </div>
            <p>{p?.description}</p>


            <div className="flex justify-between w-[90%] absolute bottom-4 ">
              <button
                onClick={() =>
                  handleAddToCart({
                    productId: Number(p.id),
                    quantity,
                    userEmail: userEmail || ""
                  })
                }
                className=" rounded bg-blue-500 text-white px-4 py-2 whitespace-nowrap"
              >
                <AiOutlineShoppingCart className="inline align-middle" /> Add to
                Cart
              </button>

              <div className="flex items-center border rounded">
                <button  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                  } >
                  <AiOutlineLeft /> 
                </button>
                <strong className="mx-2"> {quantity}</strong>
                <button
                 onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <AiOutlineLeft className="rotate-180" />{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}


      <AiOutlineShoppingCart/>

      {/*  */}
     
    </main>
  );
}
