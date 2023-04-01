import React, { useEffect } from "react";
import axios from "axios";

export default function AxiosProductList({ setProductList }) {
  useEffect(() => {
    async function request() {
      const response = await axios("api/avo");
      setProductList(response.data);
    }
    request();
  }, []);
  return <></>;
}
 