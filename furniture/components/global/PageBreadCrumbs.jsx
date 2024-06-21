"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { FaHouse } from "react-icons/fa6";

const PageBreadCrumbs = () => {
  const pathname = usePathname();
  let currentLink = "";
  let separator = " > ";

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div key={uuidv4()} className="inline-block mb-[1rem]">
          <span className="capitalize text-#51545f">{crumb}</span>
        </div>
      );
    });

  // Add home as the first crumb
  crumbs.unshift(
    <div key={uuidv4()} className="flex items-center mb-[1rem]">
      <Link
        className="flex items-center gap-[5px] text-neutral-900 font-[600]"
        href="/"
      >
        <FaHouse className="mr-[.3rem] text-neutral-400 text-[1.3rem]" /> Home
      </Link>
      <span className="mx-[.5rem]">{separator}</span>
    </div>
  );

  return <div className="flex items-center mb-[1rem]">{crumbs}</div>;
};

export default PageBreadCrumbs;
