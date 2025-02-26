import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductGallery({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setActiveImage(images[index]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setActiveImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setActiveImage(images[newIndex]);
  };

  return (
    <div className="flex  flex-col items-center">
      
      <img
        src={activeImage}
        alt="Product"
        className="sm:w-[445px] sm:h-[445px] w-[400px]  object-cover rounded-lg cursor-pointer"
        onClick={() => openLightbox(currentIndex)}
      />

      
      <div className="hidden sm:flex gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
              activeImage === img ? "border-orange-500" : "border-transparent"
            }`}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>

      
      {lightboxOpen && (
        <div className="fixed inset-0 hidden  bg-[#000000d8] sm:flex flex-col items-center justify-center z-50">
          <button
            className=" ml-90 mb-2 text-white hover:text-[#FF7E1B] cursor-pointer text-2xl"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>
          <button
            className="absolute top-80 left-138  hover:text-[#FF7E1B] cursor-pointer text-white text-3xl"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={activeImage}
            alt="Lightbox"
            className="w-96 h-96 object-cover rounded-lg"
          />

          <button
            className="absolute top-80 right-138 hover:text-[#FF7E1B] cursor-pointer text-white text-3xl"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

          <div className="flex gap-2 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                  activeImage === img
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
