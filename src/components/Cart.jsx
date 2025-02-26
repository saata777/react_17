import { FaTrash } from "react-icons/fa";

export default function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="absolute right-0 sm:top-10 top-20 w-[360px]   bg-white shadow-lg rounded-lg p-4 sm:w-72">
      <h3 className="text-lg font-bold mb-2">Cart</h3>
      <div className="bg-[#e4e9f2] w-full h-[3px]"></div>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mt-4">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-12 h-12 rounded"
            />
            <div>
              <p className="text-sm">{item.name}</p>
              <p className="text-gray-500 text-xs">
                ${item.price.toFixed(2)} × {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 cursor-pointer">
              <FaTrash />
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button className="mt-4 w-full cursor-pointer hover:opacity-75 bg-green-500 text-white py-2 rounded-lg">
          Checkout
        </button>
      )}
    </div>
  );
}
