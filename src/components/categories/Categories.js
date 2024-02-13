import React from "react";
import "./Categories.css";

const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Categories = ({ categories, filterProduct }) => {
  return (
    <div className="--flex-center">
      {/*Fetch products by category */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="--btn --btn-secondary btn"
            key={index}
            onClick={() => filterProduct(category)}
          >
            {/* {category} */}
            {/* {category.toUpperCase()} */}
            {capitalize(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
