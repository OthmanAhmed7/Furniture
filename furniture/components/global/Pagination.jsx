const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex items-center justify-center pb-[5rem] pt-[2rem]">
      {pageNumbers.map((number) => (
        <li key={number} className="mx-[.7rem]">
          <span
            onClick={() => paginate(number)}
            href="#"
            className={`border-[1px] px-[.7rem] py-[.3rem] border-neutral-900 rounded-[.2rem] leading-[30px] text-center cursor-pointer select-none transition duration-300 ease-in-out hover:bg-primary-400 hover:text-neutral-100 hover:border-transparent ${
              currentPage === number
                ? "bg-primary-400 text-neutral-100 border-transparent"
                : ""
            }`}
          >
            {number}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
