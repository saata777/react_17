import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductDetails({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white sm:h-[426px] w-full item-center pl-[14%] flex-none  sm:pl-0 sm:pr-0 justify-between flex flex-col sm:w-[445px] mt-13   ">
      <div className="flex flex-col  gap-4 ">
        <h3 class="w-[445px] text-[#ff7e1b] sm:text-[13px] text-xs font-bold  uppercase tracking-widest">
          Sneaker Company
        </h3>
        <h2 class="sm:w-[445px] w-[327px] text-[#1c1f26] sm:text-[44px] text-[28px] font-bold leading-[48px]">
          {product.name}
        </h2>
        <p className="text-gray-600 text-[15px] w-[327px] sm:text-base ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-start flex-row justify-between w-[327px] sm:flex-col mt-4">
          <div>
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-orange-500 font-bold ml-2">
              {product.discount}%
            </span>
          </div>
          <span className="text-gray-400 line-through ml-2">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      
      <div className=" flex sm:flex-row flex-col justify-between sm:w-[445px] w-[327px] items-center">
        <div class="sm:w-[157px] w-full pb-3 mt-4 pl-5 flex  justify-between sm:items-center h-14 bg-[#f5f8fc] rounded-[10px]">
          <button
            className="px-3  cursor-pointer text-[#ff7e1b] text-[37px]  rounded-l"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="px-4 pt-3  py-1 ">{quantity}</span>
          <button
            className="px-3 flex items-center text-[33px] text-[#ff7e1b]  cursor-pointer  "
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        
        <button
          className="mt-4 mb-20 sm:mb-0 sm:w-[275px] w-full h-14 bg-orange-500 text-white py-2 hover:opacity-75 cursor-pointer rounded-lg flex items-center justify-center gap-2"
          onClick={() => addToCart(quantity)}
        >
          <FaShoppingCart />
          Add to cart
        </button>
      </div>
    </div>
  );
}
