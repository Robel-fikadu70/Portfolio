import React, { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const cards = [
  { id: 1, title: "express-JS", img: "/assets/icons8-express-js-96.svg" },
  { id: 2, title: "Git", img: "/assets/icons8-git-48.svg" },
  { id: 3, title: "Javascript", img: "/assets/icons8-javascript-96.svg" },
  { id: 4, title: "Mongodb", img: "/assets/icons8-mongodb-48.svg" },
  { id: 5, title: "Nextjs", img: "/assets/icons8-nextjs-64.svg" },
  { id: 6, title: "Nodejs", img: "/assets/icons8-nodejs-48.svg" },
  { id: 7, title: "Postgresql", img: "/assets/icons8-postgresql-48.svg" },
  { id: 8, title: "Python", img: "/assets/icons8-python-96.svg" },
  { id: 9, title: "Tailwind-css", img: "/assets/icons8-tailwind-css-48.svg" },
];

const CardSlider = () => {
  const loopCards = [...cards, ...cards]; // for seamless loop
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [animationDuration, setAnimationDuration] = useState("30s");

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      const totalWidth = el.scrollWidth;
      const speed = 100; // pixels per second
      const duration = totalWidth / speed;
      setAnimationDuration(`${duration}s`);
    }
  }, []);

  return (
    <RevealOnScroll>
    <section className="bg-transparent z-40 py-12 overflow-hidden mx-3 lg:mx-24">
      <div className="relative mask-gradient group overflow-hidden">
        <div
          className="flex gap-0 animate-marquee"
          ref={sliderRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            animationPlayState: paused ? "paused" : "running",
            animationDuration: animationDuration,
          }}
        >
          {loopCards.map((card, index) => (
            <div
              key={index}
              className="min-w-fit md:min-w-[160px] flex-shrink-0 text-transparent bg-transparent rounded-full shadow-xl hover:text-white p-4 md:p-6 transition-all duration-300 hover:p-2 group-hover:grayscale hover:grayscale-0"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain mx-auto mb-2"
              />
              <h3 className="text-sm text-center font-bold">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Styles for mask and animation */}
      <style>
        {`
          .mask-gradient {
            mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </section>
    </RevealOnScroll>
  );
};

export default CardSlider;
