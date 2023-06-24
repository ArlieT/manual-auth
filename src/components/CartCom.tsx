import { useCart } from "@/lib/State";

export default function CartCom() {
  const { cartItems } = useCart();
  console.log("cart comp ", cartItems);
  return (
    <div>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div key={item.id}>
              {item.id}
              <br />
              {item.quantity}
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
