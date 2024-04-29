import React from "react";
import { categories } from "../data/categories";
// import ModalQ from "../Pages/Modal";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="p-7 flex flex-col items-center" >
      {categories.map(({ id, CategoryName }) => (
        <Link to={`/categories/${id}`} key={id}>
          <div className="flex items-center justify-center p-4 m-3 shadow-xl hover:shadow-2xl dark:hover:shadow-fuchsia-500 dark:shadow-sm dark:shadow-fuchsia-700 dark:hover:shadow-md rounded-md  transition-shadow ease-in-out duration-200">
            <div className="flex flex-grow justify-between items-center ml-2">
              <div className="flex items-center gap-2 w-[500px]">
                {id} {CategoryName}
              </div>
            </div>
          </div>
        </Link>
      ))}
      {/* <ModalQ key={id} id={id} CategoryName={CategoryName} /> */}
    </div>
  );
};

export default Categories;

