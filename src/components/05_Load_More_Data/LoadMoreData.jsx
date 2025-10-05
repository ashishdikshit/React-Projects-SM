import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setCount] = useState(0);
  // count: number of "pages" already loaded (0 = first load). Used to compute `skip` in the API URL.

  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      //    const response = await fetch(
      //     `https://dummyjson.com/products`
      //   );

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      // Calls the API. Query params:
      // - limit=20  (fetch 20 products per request)
      // - skip=...  (skip determines pagination offset)
      // If count === 0 => skip=0 (first page). If count === 1 => skip=20 (second page), etc.

      const result = await response.json();
      if (result && result.products && result.products.length) {
        //setproducts(result.products);
        setproducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      // If result contains products, append them to previous products using a functional update:
      // prevData => [ ...prevData, ...newProducts ]
      // Then turn off the loading flag.
      // Note: If the API returns no products, this block won't run and the loading flag would stay true;
      //       but because of the catch below we still handle errors. (You might want to handle the
      //       "no products" case explicitly.)
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
    // Calls fetchProducts whenever `count` changes (and on first render because count starts at 0).
    // This causes the first page to load on mount.
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
    // Watch `products`. If we've accumulated exactly 100 items, disable the button.
    // This assumes the API has a total of 100 products; better would be to check the API `total` field.
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <div className=" load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>

      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products !</p> : null}

        {/* Button increments `count`. Because `count` is a dependency of the fetching useEffect,
            increasing `count` triggers fetchProducts() to load the next page.
            When disableButton is true, the button is disabled and a message is shown.
            Note: using setCount(count + 1) is OK here but using the functional updater form
            setCount(c => c + 1) is generally safer to avoid stale closures.
        */}
      </div>
    </div>
  );
};

export default LoadMoreData;
