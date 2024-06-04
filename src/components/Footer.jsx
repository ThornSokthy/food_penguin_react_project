const Footer = () => {
  return (
    <footer className="w-full bg-slate-600 text-white py-10 flex flex-col items-center">
      <h1 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
        Food Penguin
      </h1>
      <ul className="flex gap-6 mb-5">
        <li>About</li>
        <li>Contact</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
      <div className="flex gap-5 mb-5">
        <button className=" bg-blue-400 w-7 h-7 rounded-full flex items-center justify-center text-xl ">
          <i class="bx bxl-facebook"></i>
        </button>
        <button className=" bg-pink-500 w-7 h-7 rounded-full flex items-center justify-center text-xl ">
          <i class="bx bxl-instagram"></i>
        </button>
        <button className=" bg-blue-300 w-7 h-7 rounded-full flex items-center justify-center text-xl ">
          <i class="bx bxl-twitter"></i>
        </button>
        <button className=" bg-blue-700 w-7 h-7 rounded-full flex items-center justify-center text-xl ">
          <i class="bx bxl-linkedin"></i>
        </button>
        <button className=" bg-gray-300 w-7 h-7 rounded-full flex items-center justify-center text-xl ">
          <i class="bx bx-envelope"></i>
        </button>
      </div>
      <p>Made in 2024 &copy; by Thorn Sokthy </p>
    </footer>
  );
};

export default Footer;
