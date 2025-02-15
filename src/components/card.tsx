import React from "react";

interface CardProps {
  title: string;
  des: string;
  img: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, des, img, tags }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-[320px] h-[420px] flex flex-col justify-between" data-aos="fade-up"
     data-aos-duration="3000">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-sm text-gray-300">{des}</p>
      <div className="flex flex-wrap mt-3">
        {tags.map((tag, index) => (
          <span key={index} className="tags">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
