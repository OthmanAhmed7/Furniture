import CartContext from "@/context/CartContext";
import NotificationContext from "@/context/NotificationContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const CartItem = ({ product }) => {
  const { _id, image, name, price } = product;
  const { products, addToCart, removeFromCart, reduceCartQuantity } =
    useContext(CartContext);
  const { showNotify } = useContext(NotificationContext);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cartItem = products.find((product) => product._id === _id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [products, _id]);

  // INCREASE QUANTITY
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    addToCart(_id, image, name, price);
  };

  // REDUCE QUANTITY
  const reduceQuantity = () => {
    if (quantity > 1) {
      reduceCartQuantity(_id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      removeFromCart(_id);
    }
  };

  // CALCULATE THE PRICE
  const calculatePrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="relative bg-neutral-100 rounded-[.6rem] mb-[1.1rem] p-[1rem] flex items-center justify-start gap-[3rem] sm:px-[1rem] sm:gap-[1rem]">
      <Image
        src={image}
        alt={name}
        width={90}
        height={90}
        className="object-contain rounded-[0.2rem]"
      />
      <div className="cart-product-details">
        <h5 className="text-[1rem] font-[500]">{name}</h5>
        <h4 className="font-bold text-[1.25rem]">
          ${calculatePrice(quantity, price).toFixed(2)}
        </h4>
        <div className="flex items-center justify-between w-[5rem] mt-[1rem]">
          <button
            onClick={() => {
              reduceQuantity();
              showNotify?.(`Reduced ${name} quantity`);
            }}
            className="h-[20px] w-[20px] leading-[20px] text-[1.125rem] font-semibold bg-neutral-400 text-neutral-100 rounded-[50%]"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="h-[20px] w-[20px] leading-[20px] text-[1.125rem] font-semibold bg-neutral-400 text-neutral-100 rounded-[50%]"
          >
            +
          </button>
        </div>
        <div onClick={() => removeFromCart(_id)}>
          <MdDelete className="absolute right-[1rem] bottom-[1rem] cursor-pointer text-[1.5rem] text-[rgb(247, 19, 19)]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
