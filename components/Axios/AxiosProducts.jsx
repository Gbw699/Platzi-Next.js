import React, { useEffect } from "react";
import axios from "axios";

export default function AxiosProducts({ setProductList }) {
  useEffect(() => {
    async function request() {
      const response = await axios("api/avo");
      setProductList(response.data.data);
    }
    request();
  }, []);
  return <></>;
}
 