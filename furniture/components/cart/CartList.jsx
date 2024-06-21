import { useContext, useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import CartContext from "../../context/CartContext";
import CartItem from "../cart/CartItem";
import { motion } from "framer-motion";

const CartList = ({ cartClick, handleCartClose }) => {
  const { products } = useContext(CartContext);

  const cartNotEmpty = Array.isArray(products) && products.length !== 0;
  const [showItems, setShowItems] = useState(false);
  useEffect(() => {
    if (cartClick) {
      const timeout = setTimeout(() => {
        setShowItems(true);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setShowItems(false);
    }
  }, [cartClick]);

  const calculateSubTotal = () => {
    let subtotal = 0;

    products.forEach((product) => {
      subtotal += product.quantity * product.price;
    });

    return subtotal.toFixed(2);
  };

  return (
    <div>
      <div
        className={`fixed flex items-center justify-end bg-neutral-300 pb-[1rem] top-0 right-0 w-[100%] h-[100vh] z-[100] sm:w-[100%] md:w-[60%] lg:w[40%] xl:w-[30%] ${
          cartClick ? "translate-x-0" : ""
        }`}
      >
        <div className="h-[100vh] w-[100%] px-[2rem] lg:px-[1rem]">
          <button
            className="pt-[2rem] text-neutral-900 font-[500] text-[1rem]"
            onClick={handleCartClose}
          >
            <span>Back to store 🏃‍♂️</span>
          </button>

          <div className="flex items-start justify-center h-[70%] overflow-x-hidden overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showItems ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-[100%]"
            >
              {cartNotEmpty ? (
                products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: showItems ? 1 : 0,
                      y: showItems ? 0 : 20,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.3,
                      delay: index * 0.3,
                    }}
                  >
                    <CartItem product={product} />
                  </motion.div>
                ))
              ) : (
                <EmptyCart handleCartClose={handleCartClose} />
              )}
            </motion.div>
          </div>

          {cartNotEmpty && (
            <div className="w-[100%]">
              <div className="pt-[1rem]">
                <span className="font-[900]">
                  Subtotal: ${calculateSubTotal()}
                </span>
              </div>
              <button className="my-[1rem] bg-neutral-900 text-neutral-100 py-[.6rem] px-[1.8rem] text-[1rem] rounded-[.6rem] font-[600] w-[100%] uppercase">
                checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartList;
