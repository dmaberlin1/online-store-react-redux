import React from 'react';
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import {useSelector} from "react-redux";
import Categories from "../Categories/Categories";
const titles={
    Products:'Trending',
    Categories:'Worth seeing'
}
const Home = () => {
    const {products,categories}=useSelector((state)=>state)
    return (
      <>
       <Poster></Poster>
          <Products products={products.list} amount={5} title={titles.Products}></Products>
          <Categories products={categories.list} amount={5} title={titles.Categories}></Categories>
      </>
    );
};

export default Home;
