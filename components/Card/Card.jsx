import React from "react";
import Link from "next/link";

export default function Card({ product }) {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <h1>{product.name}</h1>
      </Link>
      <div>
        <img src={product.image} alt="img" />
      </div>
      <h2>Taste</h2>
      <p>{product.attributes.taste}</p>
      <span>{product.attributes.hardiness}</span>
      <span>${product.price}</span>
    </div>
  );
}
