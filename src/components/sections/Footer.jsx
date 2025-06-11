import React from "react";
import StyledButton from "../StyledWrapper";
import Form from "../Form";
import { useRef,useState } from "react";
import GetInTouch from "../GetInTouch";
import GinT from "../Getintouchh";

// Inclsrc/components/HeroSection.cssude your custom animations and mask here

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  return (
    
    <section
      id="footer"
      className="relative min-h-fit bg-gradient-to-b from-black to-gray-800 text-white px-4 py-13 pt-20 flex gap-20 flex-col justify-center items-center"
    >
      <div className="relative h-[400px] md:w-[900px] w-full overflow-hidden }">
        {/* Background Mask and Image Columns */}
        <div className="absolute rounded-4xl lg:rounded-full inset-0 z-0 mask-hero flex blur-[3px]">
          {/* Column 1 - Up */}
          <div className="w-1/3 overflow-hidden">
            <div className="animate-scroll-up">
              {[...Array(2)].map((_, i) => (
                <div key={i}>
                  <img
                    src="src/assets/nf1.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                  <img
                    src="src/assets/nf2.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                  <img
                    src="src/assets/nf3.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Down */}
          <div className="w-1/3 overflow-hidden">
            <div className="animate-scroll-down">
              {[...Array(2)].map((_, i) => (
                <div key={i}>
                  <img
                    src="src/assets/nf1.jpg"
                    className="src/assets/nf4.png"
                  />
                  <img
                    src="src/assets/nf1.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                  <img
                    src="src/assets/nf2.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Up */}
          <div className="w-1/3 overflow-hidden">
            <div className="animate-scroll-up">
              {[...Array(2)].map((_, i) => (
                <div key={i}>
                  <img
                    src="src/assets/nf3.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                  <img
                    src="src/assets/nf4.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                  <img
                    src="src/assets/nf1.jpg"
                    className="h-[200px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Foreground Content */}
        <div className=" relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Curious to work together? let's connect, I’m just an email away!
          </h1>
          {/* <button
            onClick={() => setShowForm(true)}
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
          >
            Hire Me on Contra
          </button> */}
          <GinT
            onClick={() => {
              setShowForm(true);
              setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 100); // small delay to ensure the form is rendered
            }}
          />
        </div>
      </div>

      {showForm && (
        <div ref={formRef} className="rf-fade-slide-in mt-6">
          <button
            onClick={() => setShowForm(false)}
            className="mb-4 text-sm underline"
          >
            Close Form
          </button>
          <Form />
        </div>
      )}

      <div className="flex flex-col md:flex-row w-full md:justify-between justify-center items-center gap-6 mt-16">
        <div className="mx-25">
          <p className=""> &copy;Robel Fikadu 2025</p>
        </div>

        <div className="mx-25 flex flex-row  gap-16 md:gap-10 ">
          <StyledButton name={"LinkedIn"} href={"https://www.linkedin.com/in/robel-fikadu-612a14300/"} />
          <StyledButton name={"Email"} href={"mailto:robelfikadu70@gmail.com"} />
          <StyledButton name={"Telegram"} href={"https://t.me/Robelfikadu"}/>
          <StyledButton name={"Resume"} href={"https://docs.google.com/document/d/1JKHtHz1n_Em_zS-Eg5sSnsvEdzLC64HtlpsvW8Vwhos/edit?usp=sharing"}/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
