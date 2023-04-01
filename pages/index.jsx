import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AxiosProducts from "../components/Axios/AxiosProducts";

export default function home() {
  const [productList, setProductList] = useState({});

  return (
    <div>
      <AxiosProducts setProductList={setProductList} />
      <Navbar />
    </div>
  );
}
