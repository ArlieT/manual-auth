import Image from "next/image";

export default function Cart() {
  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <div className="flex w-[80%] h-[80%] justify-center items-center gap-2">
        <div className="flex-col w-full h-full">
          {/* navigation /homepage/products/shopping cart */}
          <div>
            <div className="border mb-2 rounded-md p-4">
              <h2>Login </h2>
              <p>test</p>
            </div>

            {/* personal info / name address */}

            <div className="border rounded-md p-4">
              <h2>Shipping Address </h2>
              <p>test</p>
            </div>

            {/* payments */}
            <div className="px-5 py-1.5 bg-gray-300">Payment Method </div>
          </div>
        </div>
        {/* second col */}
        <div className="flex flex-col w-[40%]  h-full border rounded-md">
          <div className="font-bold">Your Order</div>
          <hr />
          <div className="flex gap-x-3">
            {/* product image */}
            <div className="rounded-md">
              <Image src={"/"} alt="" fill />
            </div>
            {/* product description */}
            <div>
              <h2>Jeans with sequins</h2>
              <small>
                Size: <span className="font-bold"> XL</span>
              </small>

              <div>
                <p>$39,00</p> x <span>2</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-400 rounded-md text-xl font-bold">
            <h1>Total</h1>
            <h1>$117,00</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
