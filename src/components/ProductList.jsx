import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../redux/slices/productSlices";
import Product from "./Product";
import "../css/Product.css";

function ProductList() {
  const dispatch = useDispatch();
  const {products, loading} = useSelector((store) => store.product);
  console.log(products, loading);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-20">
      <div className="group-relative">
        <h2 className="text-2xl font-normal tracking-tight text-gray-900">
          En Çok Tercih Edilenler
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8">
          {loading ? (
            <p>loading</p>
          ) : (
            products &&
            products.map((product, i) => <Product key={i} product={product} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
