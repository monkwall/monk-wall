import React from "react";
import Image from "next/image";
import Testimonial from "../testimonial";

const Testimonials = () => {
  return (
    <div className="p-6 pb-12 min-h-screen relative max-w-screen-2xl items-center mx-auto bg-[#ffe4c4] dark:bg-[#0e172a]">
      <div
        className="w-full h-5/6 absolute inset-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] dark:opacity-40 opacity-75"
        style={{
          backgroundImage: 'url("/17.jpeg")', // Replace with the path to your image 21
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)", // Adjust the blur value as needed
        }}
      ></div>
      <div className="hidden lg:block absolute bottom-0 transform -translate-y-1/2 right-0 p-4">
        <Image
          src="/30.png"
          alt="Monk Images With Laptop"
          width={160}
          height={160}
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 transform -translate-y-1/2 left-0 p-4">
        <Image
          src="/3.png"
          alt="Monk Images With Laptop"
          width={200}
          height={200}
        />
      </div>
      <div className="max-w-4xl1 relative mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-sky-50 sm:text-6xl">
          Testimonials
        </h1>
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
