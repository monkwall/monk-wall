// pages/_app.js
// import type { NextPage } from 'next';
// import type { Metadata } from 'next';

const Seo = () => {
  const title = "Monk Wall";
  const description =
    "We bring your digitalization dreams to life. Welcome to Monk Wall, where we specialize in delivering comprehensive solutions for your digital presence. As a seasoned team of developers and designers, we take pride in offering end-to-end services for website and mobile app development. From conceptualization to deployment, our skilled professionals work collaboratively to bring your ideas to life. Whether you need a dynamic website or a feature-rich mobile application, we are dedicated to delivering cutting-edge solutions that meet your unique requirements. Explore the possibilities with Monk Wall and let us transform your vision into a seamless and engaging digital experience.";
  const url = "https://monkwall.com/";
  const logo = "/favicon-32x32.png";
  const author = "Monk Wall";
  const publishedTime = "2024-01-01T12:00:00Z";
  const lastModifiedTime = "2024-01-02T14:30:00Z";
  const language = "en";
  // const alternateLanguages = [
  //   { hrefLang: "es", href: "https://monkwall.com//es/page" },
  //   // Add more language links as needed
  // ];

  const metadata = {
    title,
    author,
    publishedTime,
    lastModifiedTime,
    language,
    description,
    url,
    canonical: url,
    type: "website",
    image: {
      url: "/logo.png",
      width: 400,
      height: 300,
      type: "image/jpeg",
    },
    card: "summary_large_image",
    site: "@monk-wall",
    creator: "@monk-wall",
    keywords:
      "Freelance Web Development, Mobile App Freelancer, Website Design Services, App Development Freelancer, Freelance UI/UX Designer, Custom Website Solutions, Mobile App Developers, Responsive Web Design, Freelance Software Engineer, Hire App Programmers, Affordable Web Development, Creative App Design, Freelance Front-End Developer, Backend Development Services, Web and Mobile Solutions, E-commerce Website Development, Cross-Platform App Development, WordPress Freelancer, Android and iOS App Development, Full Stack Development Freelancer",
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{metadata.title}</title>
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

      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <link rel="canonical" href={metadata.url} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image.url} />
      <meta property="og:image:type" content={metadata.image.type} />
      <meta
        property="og:image:width"
        content={metadata.image.width.toString()}
      />
      <meta
        property="og:image:height"
        content={metadata.image.height.toString()}
      />
      <meta name="twitter:card" content={metadata.card} />
      <meta name="twitter:image" content={"/logo.png"} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:creator" content={metadata.creator} />
      <meta name="twitter:site" content={metadata.site} />
      <meta name="twitter:description" content={metadata.description} />

      {/* Additional Metadata */}
      <meta name="author" content={metadata.author} />
      <meta name="article:published_time" content={metadata.publishedTime} />
      <meta name="article:modified_time" content={metadata.lastModifiedTime} />
      {/* <meta name="article:section" content={metadata.articleSection} />
      {metadata.articleTags.map((tag, index) => (
        <meta name="article:tag" key={index} content={tag} />
      ))} */}
      <meta name="language" content={metadata.language} />
      {/* {metadata.alternateLanguages.map((lang, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={lang.hrefLang}
          href={lang.href}
        />
      ))} */}
    </>
  );
};

export default Seo;
