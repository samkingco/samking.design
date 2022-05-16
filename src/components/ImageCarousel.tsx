import Image from "next/image";
import { useEffect, useState } from "react";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface Image {
  src: string;
  alt: string;
}

export interface CarouselProps {
  images: Image[];
}

export function ImageCarousel({ images }: CarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const prevIndex = wrap(0, images.length, imageIndex - 1);
  const nextIndex = wrap(0, images.length, imageIndex + 1);

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (["ArrowLeft", "p"].includes(key)) {
        setImageIndex(prevIndex);
      }
      if (["ArrowRight", "n"].includes(key)) {
        setImageIndex(nextIndex);
      }
    };
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [prevIndex, nextIndex]);

  return (
    <div className="project-images-wrapper">
      <div className="project-images">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`project-image ${
              index === imageIndex ? "project-image-active" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={2800}
              height={1800}
              quality={100}
              priority
            />
          </div>
        ))}
      </div>

      <nav className="project-image-nav">
        <div className="nav-buttons">
          <button
            aria-label="Previous image"
            onClick={() => setImageIndex(prevIndex)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.41547 3.31421L2 8.00001L6.41547 12.6858L7.87104 11.3142L5.69036 9.00001H14.374V7.00001H5.69036L7.87104 4.68581L6.41547 3.31421Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button
            aria-label="Next image"
            onClick={() => setImageIndex(nextIndex)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.95856 3.31421L14.374 8.00001L9.95856 12.6858L8.50298 11.3142L10.6837 9.00001H2V7.00001H10.6837L8.50298 4.68581L9.95856 3.31421Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="pagination">
          {images.map((i, index) => (
            <button
              key={i.src}
              className={`pagination-dot ${
                index === imageIndex ? "pagination-dot-active" : ""
              }`}
              onClick={() => setImageIndex(index)}
            >{`Jump to image ${index + 1}`}</button>
          ))}
        </div>
      </nav>
    </div>
  );
}
