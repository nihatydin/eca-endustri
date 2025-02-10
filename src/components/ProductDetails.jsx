// import {useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {useParams} from "react-router-dom";
// import {setSelectedProduct} from "../redux/slices/productSlices";

// function ProductDetails() {
//   const {id} = useParams();
//   const {products, selectedProduct} = useSelector((store) => store.product);
//   const {name, description, imageUrl} = selectedProduct;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     getProductById();
//   }, []);

//   const getProductById = () => {
//     products &&
//       products.map((product) => {
//         if (product.id == id) {
//           dispatch(setSelectedProduct(product));
//         }
//       });
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-between gap-32 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-20 border">
//       <div className="mx-auto w-full lg:mx-0">
//         <img className="max-h-80 mx-auto" src={imageUrl} alt="" />
//       </div>
//       <div className="mx-auto w-full lg:mx-0">
//         <p className="mt-0 text-pretty text-lg font-medium text-gray-900 sm:text-xl/8 ">
//           {name}
//         </p>
//         <p className="mt-4 text-pretty text-md font-small text-gray-800 sm:text-md/8 text-justify">
//           {description ? description : "yok"}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
  setSelectedProduct,
  getAllProducts,
} from "../redux/slices/productSlices";

function ProductDetails() {
  const {id} = useParams();
  const {products, selectedProduct} = useSelector((store) => store.product);
  const {name, description, imageUrl} = selectedProduct;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Eğer products boşsa, verileri yükle
    if (!products.length) {
      dispatch(getAllProducts());
    }

    // Ürün bilgilerini getir
    getProductById();
  }, [products]);

  const getProductById = () => {
    const product = products.find((product) => product.id == id);

    if (product) {
      dispatch(setSelectedProduct(product));
    }
  };

  return (
    <>
      {name ? (
        <div className="flex flex-col md:flex-row justify-between gap-32 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-20">
          <div className="mx-auto w-full lg:mx-0">
            <img className="max-h-80 mx-auto" src={imageUrl} alt={name} />
          </div>
          <div className="mx-auto w-full lg:mx-0">
            <p className="mb-4 text-pretty text-lg font-medium text-gray-800 sm:text-xl/8 ">
              {name}
            </p>
            <p className="mt-0 text-pretty text-lg font-medium text-gray-800">
              Ürün Özellikleri
            </p>
            <p className="mt-2 text-pretty text-md font-small text-gray-800 sm:text-md/8 text-justify">
              {description}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-screen justify-center items-center">
          Loading
        </div>
      )}
    </>
  );
}

export default ProductDetails;
