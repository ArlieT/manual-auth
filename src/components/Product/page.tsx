// 'use client'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as React from "react";
import { IProduct, getProducts } from "../../../service/apiRequest";
import Image from "next/image";

export default function Product() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

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
  return (
    <main className="flex ">
      {products?.map((p) => {
        return (
          <div key={p.id} className="relative flex  flex-col h-[22rem] w-[20rem] overflow-hidden  p-6 border rounded bg-white shadow  text-black">
            <strong>{p?.name}</strong>


            <div className="w-[100%] h-[150px] border mb-2 border-rose-500 overflow-hidden">
            <Image src={p.image} alt={p.name} height={100} width={350} className=''/>
            </div>
            <p>{p?.description}</p>

            <button className="self-start absolute bottom-4 rounded bg-blue-500 text-white px-4 py-2 whitespace-nowrap"><AiOutlineShoppingCart className='inline align-middle'/> Add to Cart</button>
          </div>
        );
      })}

    </main>
  );
}
