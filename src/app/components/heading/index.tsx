import React from "react";
import styles from "./Heading.module.css";
import Image from "next/image";

const Heading = () => {
  return (
    <div className="p-6 pt-0 lg:pt-6  pb-12 min-h-[83vh] relative max-w-7xl mx-auto flex flex-col-reverse md:block">
      {/* <div
        className="w-full h-5/6 absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT dark:opacity-101 opacity-751 dark:opacity-30 opacity-50"
        style={{
          backgroundImage: 'url("/29.jpeg")', // Replace with the path to your image 21
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)", // Adjust the blur value as needed
        }}
      ></div> */}
      <div className="lg:block md:absolute md:top-1/2 transform -translate-y-1/2 left-0 p-4 contents mt-3">
        <Image
          src="/4.png"
          alt="Monk Images With Laptop"
          width={200}
          height={200}
          className="mx-auto mt-5 hidden lg:block"
        />
      </div>
      <div className="lg:block md:absolute md:top-1/2 transform -translate-y-1/2 right-0 p-4 contents">
        <Image
          src="/7.png"
          alt="Monk Images With Laptop"
          width={200}
          height={200}
          className="mx-auto mt-5"
        />
      </div>
      <div className="max-w-4xl relative mx-auto">
        <div className="text-center dark:text-sky-400">
          <div className={styles.wrapper}>
            <div className={styles.top}>Monk Wall</div>
            <div className={`${styles.bottom} dark:hidden`} aria-hidden="true">
              Monk Wall
            </div>
            <div
              className={`${styles.darkBottom} hidden dark:block`}
              aria-hidden="true"
            >
              Monk Wall
            </div>
          </div>
          <p className="text-lg text-slate-500 dark:text-sky-400">
            We Illustrate Your Vision and bring your ideas to life.
          </p>
        </div>
        <div>
          <h3 className="mt-6 font-medium text-center text-slate-700 dark:text-slate-400 dark">
            &quot;Welcome to Monk Wall, where we specialize in delivering
            comprehensive solutions for your digital presence. As a seasoned
            team of developers and designers, we take pride in offering
            end-to-end services for website and mobile app development. From
            conceptualization to deployment, our skilled professionals work
            collaboratively to bring your ideas to life. Whether you need a
            dynamic website or a feature-rich mobile application, we are
            dedicated to delivering cutting-edge solutions that meet your unique
            requirements. Explore the possibilities with Monk Wall and let us
            transform your vision into a seamless and engaging digital
            experience.&quot;
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Heading;
