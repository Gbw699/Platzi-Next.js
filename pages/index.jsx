import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AxiosProductList from "../components/Axios/AxiosProductList";
import Card from "../components/Card/Card";

export default function home() {
  const [productList, setProductList] = useState({});

  return (
    <div>
      <AxiosProductList setProductList={setProductList} />
      <Navbar />
      {productList.data?.map((product) => {
        return <Card product={product} key={product.id} />;
      })}
    </div>
  );
}
