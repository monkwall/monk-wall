import Head from "next/head";

export default function Seo() {
  const title = "Monk Wall";
  const description =
    "We Illustrate Your Vision and bring your ideas to life. Welcome to Monk Wall, where we specialize in delivering comprehensive solutions for your digital presence. As a seasoned team of developers and designers, we take pride in offering end-to-end services for website and mobile app development. From conceptualization to deployment, our skilled professionals work collaboratively to bring your ideas to life. Whether you need a dynamic website or a feature-rich mobile application, we are dedicated to delivering cutting-edge solutions that meet your unique requirements. Explore the possibilities with Monk Wall and let us transform your vision into a seamless and engaging digital experience.";
  const url = "https://monkwall.com/";
  const logo = "/favicon-32x32.png";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="transparent" />

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Freelance Web Development, Mobile App Freelancer, Website Design Services, App Development Freelancer, Freelance UI/UX Designer, Custom Website Solutions, Mobile App Developers, Responsive Web Design, Freelance Software Engineer, Hire App Programmers, Affordable Web Development, Creative App Design, Freelance Front-End Developer, Backend Development Services, Web and Mobile Solutions, E-commerce Website Development, Cross-Platform App Development, WordPress Freelancer, Android and iOS App Development, Full Stack Development Freelancer"
      />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={"/bannner.png"} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@diepsteph" />
      <meta name="twitter:site" content="@diepsteph" />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
