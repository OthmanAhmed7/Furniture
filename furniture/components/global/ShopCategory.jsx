const ShopCategory = ({ selectedProduct, handleFilterChange }) => {
  return (
    <>
      <aside className="bg-neutral-100 rounded-[.4rem] px-[2rem] py-[2rem] mb-[3rem] overflow-hidden h-fit">
        <h3 className="my-[1rem] text-[1.3rem] font-[600]">Categories</h3>

        <div className="flex flex-col gap-[.7rem] items-start justify-start mb-[1rem] transition duration-300 ease-in">
          <span
            className={`text-[1rem] cursor-pointer font-[600] hover:text-primary-400 ${
              selectedProduct === "all" ? "text-primary-400" : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </span>
          <span
            className={`text-[1rem] cursor-pointer font-[600] hover:text-primary-400 ${
              selectedProduct === "tables" ? "text-primary-400" : ""
            }`}
            onClick={() => handleFilterChange("tables")}
          >
            Tables
          </span>
          <span
            className={`text-[1rem] cursor-pointer font-[600] hover:text-primary-400 ${
              selectedProduct === "chairs" ? "text-primary-400" : ""
            }`}
            onClick={() => handleFilterChange("chairs")}
          >
            Chairs
          </span>
          <span
            className={`text-[1rem] cursor-pointer font-[600] hover:text-primary-400 ${
              selectedProduct === "beds" ? "text-primary-400" : ""
            }`}
            onClick={() => handleFilterChange("beds")}
          >
            Beds
          </span>
          <span
            className={`text-[1rem] cursor-pointer font-[600] hover:text-primary-400 ${
              selectedProduct === "couches" ? "text-primary-400" : ""
            }`}
            onClick={() => handleFilterChange("couches")}
          >
            Couches
          </span>
        </div>
      </aside>
    </>
  );
};

export default ShopCategory;
