// 'use client'
import prisma from "@/lib/prisma";
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
    <div>
      {products?.map((p) => {
        return (
          <div key={p.id} className="flex my-36 flex-col border text-black">
            <p>{p.name}</p>
            <p>{p.description}</p>
            <Image src={p.image} alt="" fill />
          </div>
        );
      })}
    </div>
  );
}
