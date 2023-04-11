import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AxiosProduct from "../../components/Axios/AxiosProduct";

export default function ProductItem() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  return (
    <div>
      <Link href="/">Volver</Link>
      <AxiosProduct id={router.query.id} setProduct={setProduct} />
      <h1>{product?.name}</h1>
      <div>
        <img src={product?.image} alt="img" />
      </div>
      <h2>Description</h2>
      <p>{product?.attributes?.description}</p>
      <h2>Shape</h2>
      <p>{product?.attributes?.shape}</p>
      <h2>Hardiness</h2>
      <p>{product?.attributes?.hardiness}</p>
      <h2>Taste</h2>
      <p>{product?.attributes?.taste}</p>
    </div>
  );
}
