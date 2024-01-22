import Image from "next/image";
import Heading from "./components/heading";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="mt-[139px] w-full" id="home">
        <Heading />
      </section>

      <section className="w-full" id="our-story">
        <About />
      </section>

      <section className="w-full" id="testimonials">
        <Testimonials />
      </section>

      <section className="w-full" id="contact-us">
        <Contact />
      </section>
    </main>
  );
}
