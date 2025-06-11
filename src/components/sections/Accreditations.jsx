// src/components/Accreditations/Accreditations.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { accreditationsData } from "../accreditationsData";
import SeeMoreBtn from "../SeeMoreBtn";

const Accreditations = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(accreditationsData.length);
  };

  return (
    <section id="accreditation"> 
      <StyledWrapper className="bg-transparent text-white px-4 py-20">
      <div></div>
      <div className="mx-10 md:mx-30 mb-10">
        <h1 className="text-3xl font-semibold mb-10">Accreditations</h1>

        <div className="cards">
          {accreditationsData.slice(0, visibleCount).map((item) => (
            <div key={item.id} className="card">
              <img
                src={item.image}
                alt="Certificate"
                className="w-60 h-40 object-cover rounded-xl mb-2"
              />
              <div className="flex flex-col gap-6 md:mx-10 md:mt-10">
                <p className="second-text">{item.date}</p>
                <p className="tip">{item.description}</p>
              </div>
              
            </div>
            
          ))}
        </div>

        {visibleCount < accreditationsData.length && (
          <div className="flex items-center justify-center mt-10">
            <button
              onClick={showMore}
              className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#e81cff] hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#e81cff] relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-blue-900 after:right-8 after:top-3 after:rounded-full after:blur-lg"
            >
              View More
            </button>
          </div>
        )}
      </div>
      
    </StyledWrapper>
    </section>
    
  );
};

const StyledWrapper = styled.section`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cards .card {
    background-color: transparent;
    display: flex;
    // align-items: center;
    // justify-content: center;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;


    }
    // text-align: center;
    padding: 20px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1.5em;
    font-weight: 700;

  }

  .cards .card p.second-text {
    font-size: 1em;
    opacity: 0.8;
  }

  .cards .card:hover {
    transform: scale(1.05);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(6px);
    transform: scale(0.95);
  }
`;

export default Accreditations;
