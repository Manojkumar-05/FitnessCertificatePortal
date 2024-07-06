import React from 'react'
import { useParams } from 'react-router-dom';
import { categories } from "../data/categories";


const Detials = () => {
  let { id } = useParams();

  return (
    <div>
        <div>
          {categories[id - 1].CategoryName}</div>
    </div>
  )
}

export default Detials