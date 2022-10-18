import { useEffect, useState } from "react";

const url = "https://ilandback.herokuapp.com";

const useGetProducts = (endpoint) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${url}/${endpoint}`).then((res) => res.json());
        setProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return { products };
};

export default useGetProducts;
