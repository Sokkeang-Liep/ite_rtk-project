import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/countSlice/cartSlice";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector<RootState, CartItem[]>((state) => state.cart.items);

  return (
    <div>
      <h1>🛒 Product Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            -
          </button>

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  ...item,
                  quantity: 1,
                  image: ""
                })
              )
            }
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}