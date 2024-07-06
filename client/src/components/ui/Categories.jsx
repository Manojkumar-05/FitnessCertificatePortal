import React from "react";
import { categories } from "../data/categories";
// import ModalQ from "../Pages/Modal";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex justify-center p-7">
      <div className="max-w-[900px] w-full mx-auto">
        {categories.map(({ id, CategoryName }) => (
          <Link to={`/categories/${id}`} key={id}>
            <div className="p-4 m-3 shadow-xl hover:shadow-2xl dark:hover:shadow-[#a21caf] dark:shadow-sm dark:shadow-[#a21caf] dark:hover:shadow-md rounded-md transition-shadow ease-in-out duration-200">
              <div className="flex flex-grow justify-between items-center ml-2">
                <div className="flex items-center gap-2">
                  {id} {CategoryName}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
