import Image from "next/image";

const EmptyCart = ({ handleCartClose }) => {
  return (
    <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%]">
      <Image
        src="/img/empty-cart.webp"
        width={500}
        height={500}
        alt="empty cart image"
      />
      <button
        className="bg-neutral-900 text-neutral-100 py-[1rem] px-[2rem] rounded-[.4rem] text-[1rem]"
        onClick={handleCartClose}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
