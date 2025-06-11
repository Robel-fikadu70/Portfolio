// src/components/Accreditations/AccreditationCard.jsx
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const AccreditationCard = ({ date, description, image }) => {
  return (
    <RevealOnScroll>
      <>
        <div
          id="accreditation"
          className="my-10 flex bg-amber-50 flex-col md:flex-row gap-4 group"
        >
          <img
            src={image}
            alt="Certificate"
            className="w-82 h-48 object-cover rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-400"
          />
          <div className="flex flex-col gap-6 md:mx-10 md:mt-10">
            <h2 className="text-2xl font-extralight font-sans opacity-70 group-hover:opacity-100 transition-opacity duration-400">
              {date}
            </h2>
            <p className="text-2xl font-light opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          </div>
        </div>
        <hr />
      </>
    </RevealOnScroll>
  );
};

export default AccreditationCard;
