import { CartContext } from "../Context/CartContextProvider";
import { useContext } from "react";

export const Cart = () => {
  const { value, addValue } = useContext(CartContext);

  return (
    <div>
      cart:{value}
      <button
        onClick={() => {
          addValue();
        }}
      >
        add
      </button>
    </div>
  );
};
