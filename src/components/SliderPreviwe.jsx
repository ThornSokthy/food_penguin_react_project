import useWindowSize from "../hooks/useWindowSize";
import slide_one from "../assets/product_preview/product-preview-2.jpg";
import slide_two from "../assets/product_preview/product-preview-3.jpg";

const SliderPreviwe = () => {
  const Slider = document.querySelector("#slider");
  const Images = document.querySelectorAll(".image");
  const { width } = useWindowSize();

  let sliderNumber = 1;
  let lenght = Images.length;
  let widthFrame = 500;

  if (width > 768) {
    widthFrame = 800;
  }

  function nextSlide() {
    Slider.style.transform = `translateX(-${sliderNumber * widthFrame}px)`;
    sliderNumber++;
  }

  function firstSlide() {
    Slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
  }

  function prevSlide() {
    Slider.style.transform = `translateX(-${
      (sliderNumber - 2) * widthFrame
    }px)`;
    sliderNumber--;
  }

  function lastSlide() {
    Slider.style.transform = `translateX(-${(lenght - 1) * widthFrame}px)`;
    sliderNumber = lenght;
  }

  // setInterval(() => {
  //   sliderNumber < lenght ? nextSlide() : firstSlide();
  // }, 5000);

  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-52 xl:px-60 flex flex-col items-center gap-2 mt-3">
      <div className="flex items-center gap-x-4">
        <div className="relative w-[500px] md:w-[800px]  overflow-hidden aspect-video">
          <button
            onClick={() => {
              sliderNumber > 1 ? prevSlide() : lastSlide();
              changeColor();
            }}
            className="py-[0.5em] px-3 bg-gray-200 rounded-full cursor-pointer font-bold z-10 absolute top-[50%] -translate-y-[50%]"
          >
            <i class="bx bx-chevron-left text-2xl"></i>
          </button>
          <div id="slider" className="flex transition-all duration-1000 ">
            <img src={slide_one} className="image w-full aspect-auto" />
            <img src={slide_two} className="image w-full aspect-auto" />
            <img src={slide_one} className="image w-full aspect-auto" />
            <img src={slide_two} className="image w-full  aspect-auto" />
            <img src={slide_one} class="image w-full aspect-video" />
          </div>
          <button
            onClick={() => {
              sliderNumber < lenght ? nextSlide() : firstSlide();
              changeColor();
            }}
            className="py-[0.5em] px-3 bg-gray-200 rounded-full cursor-pointer font-bold z-10 absolute top-[50%] -translate-y-[50%] right-0"
          >
            <i class="bx bx-chevron-right text-2xl"></i>
          </button>
        </div>
      </div>
      <div id="bottom"></div>
    </div>
  );
};

export default SliderPreviwe;
