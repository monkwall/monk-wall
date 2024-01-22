import Image from "next/image";
import React from "react";
import LinkedIn from "../svgs/LinkedIn";
import Gmail from "../svgs/Gmail";
import Whatsapp from "../svgs/Whatsapp";
import Mobile from "../svgs/Mobile";

const Profile = () => {
  const profileData: any = [
    {
      logo: "/1.png",
      logoAlt: "Monk Logo",
      profileImage: "/profile1.jpg",
      ProfileImageAlt: "Founder's Image",
      name: "Gande Varun Kumar",
      stats: [
        { name: "Experience", value: "5+" },
        { name: "No of Projects", value: "15+" },
      ],
      socialMedia: [
        {
          icon: (
            <LinkedIn
              className="h-8 w-8 text-blue-500 dark:text-cyan-50"
              aria-hidden="true"
            />
          ),
          url: "https://www.linkedin.com/in/varunkumargande/",
        },
        {
          icon: (
            <Gmail
              className="h-8 w-8 text-red-400 dark:text-cyan-50"
              aria-hidden="true"
            />
          ),
          url: `mailto:babluvarunn@gmail.com?subject=${encodeURIComponent(
            "Enquiry for a project"
          )}&body=${encodeURIComponent(
            "Hello, I would like to contact you for a project"
          )}`,
        },
        {
          icon: (
            <Whatsapp
              className="h-8 w-8 text-green-500 dark:text-cyan-50"
              aria-hidden="true"
            />
          ),
          url: `https://api.whatsapp.com/send?phone=+919493541910&text=${encodeURIComponent(
            "Hello, I would like to contact you for a project"
          )}`,
        },
        {
          icon: (
            <div className=" text-violet-600 dark:text-cyan-50">
              <Mobile
                className="w-8 h-8 fill-dark-yellow-500 border-dark-yellow-700"
                aria-hidden="true"
              />
            </div>
          ),
          phone: `tel:15733944990`,
        },
      ],
      description: [
        `With over 5 years of experience and a background as a tech lead, I bring a wealth of expertise in end-to-end development of mobile apps and websites. My skill set encompasses a range of programming languages and frameworks, including JavaScript, React, Hosting, Django, and more. In mobile app development, I am well-versed in cross-platform frameworks like React Native.`,
        `As a tech lead, I have successfully managed complete project lifecycles, from initial requirements gathering through to deployment. I take pride in my ability to lead and mentor teams, fostering collaboration and ensuring the successful delivery of projects.`,
        `My proficiency extends to full-stack development, encompassing database design, server-side development, API creation, and frontend user interface design. I have gained experience in diverse industries, such as finance, healthcare, and e-commerce.`,
        `Throughout my career, I have tackled challenging projects, finding innovative solutions to technical and strategic obstacles. I am committed to continuous learning, staying abreast of the latest industry trends and technologies. Additionally, I have pursued certifications and courses to enhance my skills.`,
        `In summary, my experience reflects a track record of quantifiable achievements, successful project launches, improved efficiency, and positive impacts on team performance. I am well-prepared to contribute my expertise to future endeavors.`,
      ],
    },
    {
      logo: "/5.png",
      logoAlt: "Monk Logo",
      profileImage: "/profile1.jpg",
      ProfileImageAlt: "Founder's Image",
      name: "Jayant Sharma",
      stats: [
        { name: "Experience", value: "5+" },
        { name: "No of Projects", value: "12+" },
      ],
      socialMedia: [
        {
          icon: (
            <LinkedIn
              className="h-8 w-8 text-blue-500 dark:text-cyan-50"
              aria-hidden="true"
            />
          ),
          url: "https://www.linkedin.com/in/jayant-sharma-14482a1b7/",
        },
        {
          icon: (
            <Gmail
              className="h-8 w-8 text-red-400 dark:text-cyan-50"
              aria-hidden="true"
            />
          ),
          url: `mailto:jayant1998.sha@gmail.com?subject=${encodeURIComponent(
            "Enquiry for a project"
          )}&body=${encodeURIComponent(
            "Hello, I would like to contact you for a project"
          )}`,
        },
        {
          icon: (
            <Whatsapp
              className="h-8 w-8 text-green-500 dark:text-cyan-50"
              aria-hidden="true"
            />
          ),
          url: `https://api.whatsapp.com/send?phone=+918076329843&text=${encodeURIComponent(
            "Hello, I would like to contact you for a project"
          )}`,
        },
        {
          icon: (
            <div className=" text-violet-600 dark:text-cyan-50">
              <Mobile className="w-8 h-8" aria-hidden="true" />
            </div>
          ),
          phone: `tel:+918076329843`,
        },
      ],
      description: [
        `As a seasoned Senior Full Stack Developer with over 5 years of hands-on experience, I am adept at crafting robust and scalable solutions for both websites and mobile applications. My comprehensive skill set spans the entire development stack, enabling me to seamlessly navigate from frontend interfaces to backend databases.`,
        `In my journey as a developer, I have honed my expertise in a myriad of technologies, including JavaScript, React, Angular, Node.js, and more. My proficiency extends to mobile app development, where I am well-versed in cross-platform frameworks such as React Native.`,
        `I bring a wealth of experience in leading end-to-end project development cycles, from conceptualization and requirements gathering to deployment and maintenance. As a seasoned professional, I am passionate about fostering collaborative environments and have a proven track record of mentoring and leading high-performing development teams.`,
        `My commitment to staying abreast of industry trends and emerging technologies ensures that I bring innovative solutions to the table. I thrive on overcoming challenges and am dedicated to delivering exceptional results.`,
        `With a knack for translating complex requirements into elegant and efficient code, I am poised to contribute my skills and experience to drive the success of future projects.`,
      ],
    },
  ];

  return (
    <>
      {profileData.map((profile: any, index: number) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center md:items-start md:justify-between p-8`}
        >
          <div
            className={`md:w-1/2 flex ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <Image
              width={192}
              height={192}
              src={profile.logo} // Replace with the path to your image
              alt={profile.logoAlt}
              className="object-contain"
            />
            <div>
              <Image
                width={400}
                height={400}
                src={profile.profileImage} // Replace with the path to your image
                alt={profile.ProfileImageAlt}
                className={`object-cover rounded-full ${
                  index === 0 ? "pl-36 ml-auto mr-12" : "pr-36 mr-auto ml-12"
                }`}
              />
              <div className="flex mt-4 justify-center">
                {profile.socialMedia.map((media: any, id: number) => (
                  <a
                    key={id + profile.name + "media"}
                    target="_blank"
                    rel="noreferrer"
                    className="pr-2"
                    href={media.url}
                  >
                    {media.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-8 mt-6">
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            {profile.description.map((desc: string, key: number) => (
              <p
                key={key + "-description-" + profile.name}
                className={`dark:text-sky-300 pt-3`}
              >
                {desc}
              </p>
            ))}
            <dl className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {profile.stats.map((stat: any) => (
                <div
                  key={stat.name + profile.name}
                  className="flex flex-col-reverse"
                >
                  <dt className="text-base leading-7 dark:text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-blue-500 dark:text-gray-400">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ))}
    </>
  );
};

export default Profile;
