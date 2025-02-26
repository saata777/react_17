import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import ProductGallery from "./components/ProductGallery";

const product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125.0,
  discount: 50,
  originalPrice: 250.0,
  images: ["/image1.png", "/image2.png", "/image3.png", "/image4.png"],
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const addToCart = (quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div className="h-[100vh] w-[100%] flex flex-col sm:pt-[28px] sm:pr-[165px] sm:pb-[132px] sm:pl-[165px] items-center bg-white   ">
      <div className="w-[100%] bg-white   flex flex-col items-center">
        <header className="w-full flex sm:pl-0 sm:pr-0 mt-3 Sm:mt-0 pl-5 pr-5 justify-between items-center ">
          <div className="flex flex-row gap-[56px]  ">
            <div className="sm:hidden">
              <div className="absolute flex items-center justify-center min-h-screen bg-gray-100">
               
                <button
                  onClick={() => setOpen(true)}
                  className="absolute top-1 left-3  text-black  text-2xl rounded-full"
                >
                  ☰
                </button>

                
                <div
                  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-all duration-300 ease-in-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 left-5 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                  >
                    X
                  </button>

                  
                  <h1 className="text-2xl font-bold mt-20 p-5">
                  Collections
                  </h1>
                  <h1 className="text-2xl font-bold  p-5">
                  Men
                  </h1>
                  <h1 className="text-2xl font-bold  p-5">
                  Women
                  </h1>
                  <h1 className="text-2xl font-bold  p-5">
                  About
                  </h1>
                  <h1 className="text-2xl font-bold  p-5">
                  Contact
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="text-2xl items-center font-bold">sneakers</h1>
            <div className="sm:flex mt-1 hidden  flex-row gap-[32px]  ">
              <h2 class="text-[#696f7d] text-[15px] font-normal h-16 hover:border-b-4 border-[#ff7e1b] cursor-pointer font-['Kumbh Sans'] hover:text-[#191a1b] leading-relaxed">
                Collections
              </h2>
              <h2 class="text-[#696f7d] text-[15px] font-normal h-16 hover:border-b-4 border-[#ff7e1b] cursor-pointer font-['Kumbh Sans'] hover:text-[#191a1b] leading-relaxed">
                Men
              </h2>
              <h2 class="text-[#696f7d] text-[15px] font-normal h-16 hover:border-b-4 border-[#ff7e1b] cursor-pointer  font-['Kumbh Sans'] hover:text-[#191a1b] leading-relaxed">
                Women
              </h2>
              <h2 class="text-[#696f7d] text-[15px] font-normal h-16 hover:border-b-4 border-[#ff7e1b] cursor-pointer  font-['Kumbh Sans'] hover:text-[#191a1b] leading-relaxed">
                About
              </h2>
              <h2 class="text-[#696f7d] text-[15px] font-normal h-16 hover:border-b-4 border-[#ff7e1b] cursor-pointer  font-['Kumbh Sans'] hover:text-[#191a1b] leading-relaxed">
                Contact
              </h2>
            </div>
          </div>
          <div className="relative flex flex-row gap-10">
            <button
              className="relative cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2  -right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>

           
            <div className="flex flex-row ">
              {cartOpen && <Cart cart={cart} setCart={setCart} />}
              <img
                src="./profil.png"
                alt=""
                className="w-[50px] h-[50px] hover:border-4 cursor-pointer border-[#ff7e1b] rounded-full"
              />
            </div>
          </div>
        </header>
        <div class="w-full hidden sm:flex h-px bg-[#e4e9f2]"></div>

        <div className=" h-full flex flex-col sm:flex-row sm:mt-10 mt-4  justify-between rounded-lg sm:pl-25 sm:pr-25  sm:w-full">
          <ProductGallery images={product.images} />
          <ProductDetails product={product} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}
