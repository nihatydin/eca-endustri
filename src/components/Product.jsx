/* eslint-disable no-unused-vars  */
/* eslint-disable react/prop-types */
import {useNavigate} from "react-router-dom";
import "../css/Product.css";

function Product({product}) {
  console.log(product);
  const {id, name, imageUrl, description} = product;

  const navigate = useNavigate();

  return (
    <div>
      <div
        className="bg-white hover:cursor-pointer"
        onClick={() => navigate("/product-details/" + id)}
      >
        <img
          src={imageUrl}
          className="aspect-square w-full rounded-md bg-white object-contain group-hover:opacity-75 lg:aspect-auto lg:h-60"
        />
        <div className="mt-4 flex flex-col">
          <div className="text-xs text-gray-700 mb-4">{name}</div>
          <button
            onClick={() => navigate("/product-details/" + id)}
            className="btn-view"
          >
            Ürünü Gör
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
