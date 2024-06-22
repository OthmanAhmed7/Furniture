import Link from "next/link";
import React, { useContext } from "react";
import CartContext from "@/context/CartContext";
import { MdRemoveRedEye } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import Image from "next/image";

const Card = ({ product, showNotify }) => {
  const { name, isNew, price, image } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="relative transition ease-in all max-w-[1300px] mb-[2rem] duration-300 rounded-[0.8rem] hover:shadow-lg">
        {isNew && (
          <span className="absolute left-[1rem] top-[1rem] bg-neutral-900 text-neutral-100 rounded-[0.5rem] py-[0.3rem] px-[1rem] text-[0.875rem] z-[20] select-none">
            New
          </span>
        )}

        <Link
          href="#"
          className="relative rounded-tr-[1rem] rounded-tl-[1rem] w-fit group"
        >
          <div className="absolute top-0 left-0 opacity-0 bg-neutral-900 w-[100%] h-[100%] transition duration-300 ease-in z-[10] group-hover:opacity-40 rounded-tl-[.8rem] rounded-tr-[.8rem]"></div>
          <MdRemoveRedEye className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] text-[2rem] text-neutral-100 opacity-0 z-[20] transition duration-300 ease-in group-hover:opacity-100" />
          <div className="rounded-tl-[1rem] rounded-tr-[1rem] overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={700}
              height={700}
              className="object-cover transition-transform duration-300 ease-in group-hover:scale-[1.1] h-[13rem] w-full"
            />
          </div>
        </Link>

        <div className="flex items-center justify-between px-[1rem] bg-neutral-100 rounded-bl-[1rem] rounded-br-[1rem]">
          <div className="py-[1rem]">
            <h5 className="pt-[0.438rem] text-[1rem] font-[500]">{name}</h5>
            <h4 className="font-[700] text-[1.125rem]">${price}</h4>
          </div>

          <button
            onClick={() => {
              addToCart(product._id, image, name, price);
              showNotify;
            }}
          >
            <span className="flex items-center justify-center bg-primary-400 text-neutral-100 w-[40px] h-[40px] rounded-[0.6rem] text-[1.125rem] hover:shadow-lg">
              <TiShoppingCart />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
