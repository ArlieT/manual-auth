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
import { useCart } from "@/lib/State";

export default function Product() {
  const [products, setProducts] = React.useState<IProduct[]>([
    {
      id: 0,
      name: "Sample 1",
      price: 290,
      description: "sample",
      image: "/images/p/p1.png"
    },
    {
      id: 1,
      name: "Sample 2",
      price: 2000,
      description: "sample",
      image: "/images/p/p2.webp"
    },
    {
      id: 2,
      name: "Sample 2",
      price: 2000,
      description: "sample",
      image: "/images/p/p3.webp"
    },
    {
      id: 3,
      name: "Sample 1",
      price: 290,
      description: "sample",
      image: "/images/p/p1.png"
    },
    {
      id: 4,
      name: "Sample 2",
      price: 2000,
      description: "sample",
      image: "/images/p/p2.webp"
    },
    {
      id: 5,
      name: "Sample 2",
      price: 2000,
      description: "sample",
      image: "/images/p/p4.webp"
    }
  ]);
  const [quantity, setQuantity] = React.useState(1);
  // const [cartItems, setCartItems] = React.useState([]);
  const [userId, setUserId] = React.useState(null);

  const { data } = useSession();
  const userEmail = data?.user?.email;
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

  const handleAddToCart = async ({
    productId,
    quantity,
    userEmail
  }: IaddToCart | any) => {
    console.log("auto run");
    let params = {
      productId: productId,
      quantity: quantity,
      userEmail: userEmail || "torresarlie22@gmail.com"
    };
    notify();

    try {
      const res = await addToCart(params);

      console.log("add to cart ", res);

      setUserId(res);
    } catch (error) {
      console.error(error);
      alert("Error adding to cart");
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
        setProducts([...res.data.products]); // Set the fetched products
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
  }, [userEmail]);

  const renderProduct = (p: any, index: any) => {
    return (
      <div
        key={index}
        className="flex flex-col w-full p-6 mb-8 border rounded bg-white shadow text-black"
      >
        <strong className="text-xl mb-2 text-center">{p?.name}</strong>

        <div className="w-full mb-4 overflow-hidden">
          <Image
            src={p.image}
            alt={p.name}
            height={250}
            width={350}
            className=""
          />
        </div>

        <p className="mb-4 text-gray-600">{p?.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
              }
              className="px-4 py-2 rounded bg-blue-500 text-white"
            >
              <AiOutlineMinusCircle />
            </button>
            <strong className="text-xl">{quantity}</strong>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-4 py-2 rounded bg-blue-500 text-white"
            >
              <AiOutlinePlusCircle />
            </button>
          </div>

          <button
            onClick={() =>
              handleAddToCart({
                productId: Number(p.id),
                quantity,
                userEmail: userEmail
              })
            }
            className="px-4 py-2 rounded bg-black text-white whitespace-nowrap"
          >
            <AiOutlineShoppingCart className="inline align-middle" /> Add to
            Cart
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        theme="light"
      />

      <main className="flex flex-col justify-center items-center w-full ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-2 lg:grid-cols-3">
          {products?.length ? (
            products.map((p: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col w-full p-6 mb-8 border rounded bg-white shadow text-black"
                >
                  <strong className="text-xl mb-2 text-center">
                    {p?.name}
                  </strong>

                  <div className="w-full mb-4 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      height={250}
                      width={350}
                      className=""
                    />
                  </div>

                  <p className="mb-4 text-gray-600">{p?.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                        }
                        className="px-4 py-2 rounded bg-blue-500 text-white"
                      >
                        <AiOutlineMinusCircle />
                      </button>
                      <strong className="text-xl">{quantity}</strong>
                      <button
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="px-4 py-2 rounded bg-blue-500 text-white"
                      >
                        <AiOutlinePlusCircle />
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        handleAddToCart({
                          productId: Number(p.id),
                          quantity,
                          userEmail: userEmail || ""
                        })
                      }
                      className="px-4 py-2 rounded bg-black text-white whitespace-nowrap"
                    >
                      <AiOutlineShoppingCart className="inline align-middle" />{" "}
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>no data...</div>
          )}
        </div>

        <AiOutlineShoppingCart className="text-4xl" />
        <button className="px-4 py-2 rounded bg-blue-500 text-white whitespace-nowrap">
          add product
        </button>
      </main>
    </>
  );
}
