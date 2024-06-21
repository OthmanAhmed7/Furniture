import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }) => {
  const { label, img, title, author, date, text, link } = event;

  return (
    <>
      <div className="relative">
        <span className="absolute left-[1rem] top-[1rem] tracking-[1px] bg-[rgba(0,0,0,.4)] text-neutral-100 rounded-[.5rem] py-[.5rem] px-[1rem] text-[.875rem] select-none transition duration-200 ease-in-out cursor-pointer hover:bg-neutral-900">
          {label}
        </span>

        <Link href="#" className="align-middle">
          <Image
            src={img}
            alt="chair"
            width={700}
            height={700}
            aria-label="chair"
            className="rounded-tr-[1rem] rounded-tl-[1rem]"
          />
        </Link>
        <div className="py-[2rem] px-[1rem] bg-neutral-100 rounded-br-[1rem] rounded-bl-[1rem]">
          <Link
            className="capitalize text-neutral-900 text-[1.125rem] font-[500]"
            href="#"
          >
            {title}
          </Link>
          <div className="flex justify-start items-center mb-[1rem]">
            <p className="mr-[1rem] relative text-[.9rem] after:content-[''] after:absolute after:top-[.5rem] after:right-[-.6rem] after:bg-primary-400 after:h-[.25rem] after:w-[.25rem] after:rounded-full">
              {date}
            </p>
            <p>
              by
              <Link
                className="relative text-primary-400 font-[500] pl-[.3rem] text-[.875rem]"
                href="#"
              >
                {author}
              </Link>
            </p>
          </div>

          <div className="mb-[2rem]">
            <p>{text}</p>
          </div>

          <Link
            className="bg-primary-400 text-neutral-100 py-[.7rem] px-[1.8rem] text-[1rem] rounded-[.6rem] font-[600] uppercase"
            href="/"
          >
            {link}
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
