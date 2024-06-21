const FilterProducts = ({ handleFilterChange, selectedProduct }) => {
  return (
    <>
      <div className="mb-[2rem]">
        <div className="flex items-center justify-center flex-wrap gap-[1rem]">
          <button
            className={`filter-btn ${
              selectedProduct === "all" ? "bg-primary-400 text-neutral-100" : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            all
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === "chairs"
                ? "bg-primary-400 text-neutral-100"
                : ""
            }`}
            onClick={() => handleFilterChange("chairs")}
          >
            chairs
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === "tables"
                ? "bg-primary-400 text-neutral-100"
                : ""
            }`}
            onClick={() => handleFilterChange("tables")}
          >
            tables
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === "couches"
                ? "bg-primary-400 text-neutral-100"
                : ""
            }`}
            onClick={() => handleFilterChange("couches")}
          >
            couches
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === "beds"
                ? "bg-primary-400 text-neutral-100"
                : ""
            }`}
            onClick={() => handleFilterChange("beds")}
          >
            beds
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterProducts;
