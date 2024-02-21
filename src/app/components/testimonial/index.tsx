import React from "react";
import style from "./Testimonial.module.css";
import Image from "next/image";

const TestimonialCard = ({ avatarSrc, name, role, comment, url }: any) => {
  return (
    <div
      className={`flex-shrink-0 w-5/6 lg:w-fit rounded-md overflow-hidden mx-4 ${style.card} bg-[#ffffff60] dark:bg-[#0000008c]`}
    >
      <div className="max-w-md rounded-md overflow-hidden mx-2">
        <div className="p-4">
          <div className="flex items-center">
            <a target="_blank" rel="noreferrer" className="block" href={url}>
              <Image
                height={48}
                width={48}
                src={avatarSrc}
                alt="Avatar"
                className="mr-4"
              />
            </a>
            <div>
              <a target="_blank" rel="noreferrer" className="block" href={url}>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-sky-50">
                  {name}
                </h2>
              </a>
              <p className="text-gray-700 dark:text-slate-400">{role}</p>
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {comment.map((item: string, index: number) => (
              <p
                key={index + name}
                className="text-gray-800 dark:text-cyan-400 mt-4"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      avatarSrc: "/one-line-story.png", // replace with actual image source
      url: "https://one-line-story.monkwall.com/",
      name: "One Line Story",
      role: "Game",
      comment: [
        `Powered by Monk Wall,`,
        `Welcome to One Line Story Game!. Let's build a story and have Fun!`,
        `Best regards,`,
      ],
    },
    {
      id: 2,
      avatarSrc: "/swastikacademy.png", // replace with actual image source
      name: "Swastik Academy",
      url: "https://www.swastikacademy.in/",
      role: "Where Every Lesson Shapes a Bright Tomorrow.",
      comment: [
        `Dear Monk Wall,`,
        `It is with great pleasure that we share our experience working with your team on our institute's website development project. From the initial consultation to the final implementation, the journey has been nothing short of exceptional.`,
        `Your team's professionalism, attention to detail, and commitment to delivering a top-notch website have truly impressed us. The website not only meets but exceeds our expectations, showcasing a perfect blend of functionality and aesthetics. The user-friendly interface and seamless navigation reflect the expertise your team brought to the project.`,
        ` The collaborative approach, timely communication, and ability to accommodate our specific requirements demonstrated a level of dedication that sets your company apart. We are confident that the newly developed website will significantly enhance our online presence and effectively serve our institute's needs.`,
        ` Thank you for a job well done. We look forward to continuing our partnership and would highly recommend your services to others seeking a reliable and proficient web development team.`,
        ` Best Regards,`,
        `Swastik Academy`,
      ],
    },
    {
      id: 3,
      avatarSrc: "/sunilhorse.png", // replace with actual image source
      url: "https://www.sunilhorse.com/",
      name: "Sunil Horse",
      role: "Game Developer",
      comment: [
        `Greetings Team,`,
        `I am simply amazed by the website you've developed for me. It not only meets but exceeds my expectations. Your skill and professionalism are evident in every aspect. I am truly grateful.`,
        `Best regards,`,
      ],
    },
    {
      id: 4,
      avatarSrc: "/Aiqua.svg", // replace with actual image source
      name: "Aiqua",
      role: "Ai Powered Company",
      url: "https://aiqua-webapp.vercel.app/",
      comment: [
        `Exceptional Mobile App!`,
        `I am beyond satisfied with the mobile app developed by Monk Wall. The user-friendly interface, seamless navigation, and innovative features have greatly improved my overall experience. The team at Monk Wall is highly skilled and dedicated, and they delivered beyond my expectations. I would highly recommend their services to anyone looking for top-notch mobile app development!`,
      ],
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="flex overflow-x-auto p-4 mt-5">
      {testimonialsData.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonial;
