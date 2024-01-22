import React from "react";

const Card = ({ imgSrc, title, description }: any) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden mx-4 my-6">
      <img src={imgSrc} alt="Profile" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      imgSrc: "profile1.jpg", // replace with actual image source
      title: "John Doe",
      description: "Web Developer",
    },
    {
      id: 2,
      imgSrc: "profile2.jpg", // replace with actual image source
      title: "Jane Smith",
      description: "UX Designer",
    },
    // Add more cards as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;
