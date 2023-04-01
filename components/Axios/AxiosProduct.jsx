import React, { useEffect } from "react";
import axios from "axios";

export default function AxiosProduct({ id, setProduct }) {
  useEffect(() => {
    const product = async () => {
      const response = await axios(`/api/avo/${id}`);
      setProduct(response.data);
    };
    product();
    return () => {
      setProduct({});
    };
  }, []);
  return <></>;
}
