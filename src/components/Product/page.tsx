// 'use client'
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart
} from "react-icons/ai";
import * as React from "react";
import {
  IProduct,
  IaddToCart,
  addToCart,
  getProducts,
  getUserCart,
  getUserDetails,
  postProducts
} from "../../../service/apiRequest";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart, useModal, useProduct } from "@/lib/State";
import Loading from "@/app/(main)/loading";
import { truncate, truncateTitle } from "../../../utils/trancuate";
import Heart from "../Heart";

export default function Product() {
 
  const { product, setProduct } = useProduct();
  // const [quantity, setQuantity] = React.useState(1);
  const [quantities, setQuantities] = React.useState<{ [key: number]: number }>({});
  // const [cartItems, setCartItems] = React.useState([]);
  const [userId, setUserId] = React.useState(null);

  const { data } = useSession();
  const userEmail = data?.user?.email;

  React.useEffect(()=>{
    console.log('quant ',quantities)
  },[quantities])

  const notify = () =>
    toast("Addded Successfully ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    const erroNotif = () =>
    toast("Error Adding to cart ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });


  const handleAddToCart = async ({
    productId,
    userEmail
  }: IaddToCart | any) => {
  

    const quantity = quantities[productId] || 1; 
    
    let params = {
      productId: productId,
      quantity: quantity,
      userEmail: userEmail
    };
    
    try {
      const res = await addToCart(params);
      notify();

      console.log("add to cart ", res);

      setUserId(res);
    } catch (error) {
      console.error(error);
      erroNotif();
    }
  };

  const postProduct = async () => {
    await postProducts().then(
      (res) => {
        console.log("user product ", res);
        alert("creating successfull");
      },
      (error) => {
        console.log(error, "post product ");
      }
    );
  };

  const getAllProduct = async () => {
    try {
      const res = await getProducts();
      if (res.data && res.data.products && res.data.products.length > 0) {
        setProduct([...res.data.products]); // Set the fetched products
      } else {
        console.log("No products found");
        // You can choose whether to keep the existing products or set an empty array
        // setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Error fetching products");
    }
  };

  React.useEffect(() => {
    getAllProduct();
  }, []);

  const { cartItems, setCartItems } = useCart();

  const getUserCartItem = async () => {
    await getUserCart(userId).then(
      (res) => {
        console.log("user cart ", res);
        // setCartItems(res.cart)
        setCartItems(res.cart);
      },
      (error) => {
        console.log(error, " getting cart ");
      }
    );
  };
  console.log("arlie");
  React.useEffect(() => {
    if (userId) {
      getUserCartItem();
    }
  }, [userId]);

  React.useEffect(() => {
    const getUser = async () => {
      console.log({ userEmail });

      // if(!userEmail)return null
      try {
        if (userEmail !== null || userEmail !== undefined || userEmail !== "") {
          await getUserDetails(userEmail).then((res) => {
            console.log("user details", res);
          });
        } else {
          alert("error");
        }
      } catch (error) {
        console.log({ error });
      }
    };

    getUser();
    console.log(userEmail);
  }, [userEmail]);

  const { setShowModal, isOpen } = useModal();

  
  
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        theme="light"
      />

      <main className="flex flex-col justify-center items-center w-full ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-2 lg:grid-cols-3">
          {product?.length ? (
            product.map((p: any, index: number) => {
              const productId = Number(p.id);
              return (
                <div
                  key={index}
                  className="relative group  flex flex-col min-h-[500px] max-h-[500px] w-full px-4 py-4 mb-8  rounded bg-white shadow text-black"
                >
                  <Heart/>
                  <div className="min-h-[68%]  max-h-[68%]  w-full mb-4 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      height={250}
                      width={350}
                      className="hover:scale-105 translate-all duration-300"
                    />
                  </div>
                  <p className=" font-bold text-xl mb-2 ">
                    {truncateTitle(p?.name)}
                  </p>
                  <div className="flex  items-center">
                  <p className="mb-1 font-bold text-gray-600 mr-4">${p?.price}</p>
                  <p> | </p>
                  <small className=" text-gray-600 ml-4">
                    {truncate(p?.description)}
                  </small>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <button
                        // onClick={() =>
                        //   setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                        // }
                        onClick={() =>
                          setQuantities((prevQuantities) => ({
                            ...prevQuantities,
                            [productId]: (prevQuantities[productId] || 1) - 1 // Decrease the quantity for the specific product
                          }))
                        }
                        className=" rounded-full w-10 h-10 flex items-center justify-center bg-black/80 text-white"
                      >
                        <AiOutlineMinusCircle />
                      </button>
                      <strong key={index} className="text-xl">
                      {quantities[productId] || 1}
                      </strong>
                      <button
                        onClick={() =>
                          setQuantities((prevQuantities) => ({
                            ...prevQuantities,
                            [productId]: (prevQuantities[productId] || 1) + 1
                          }))
                        }
                        className=" rounded-full  w-10 h-10 flex items-center justify-center bg-black/80 text-white"
                      >
                        <AiOutlinePlusCircle />
                      </button>
                    </div>

                    {userEmail ? (
                      <button
                        onClick={() =>
                          handleAddToCart({
                            productId: Number(p.id),
                            userEmail: userEmail || ""
                          })
                        }
                        className="px-4 py-2 w-20 max-h-10 max-w-20 mt-2 rounded-full transition-all hover:bg-white hover:text-black hover:border-black  bg-black/80 hover:border duration-150 text-white whitespace-nowrap"
                      >
                        <AiOutlineShoppingCart className="inline align-middle" />{" "}
                        +
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowModal(!isOpen)}
                        className="px-4 py-2 w-20 max-h-10 max-w-20 rounded-full mt-2  transition-all bg-black/80 hover:bg-white hover:text-black border-black hover:border duration-150 text-white whitespace-nowrap"
                      >
                        <AiOutlineShoppingCart className="inline align-middle" />{" "}
                        +
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>

      
      </main>
    </>
  );
}
