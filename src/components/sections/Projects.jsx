import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tooltip from "../Tooltip";
import Ccard from "../HoverAdditional";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Shrinking scale transforms for cards
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.92]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.92]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.92]);

  return (
    <RevealOnScroll>
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-fit bg-transparent text-white px-4 py-20 "
    >
      
      
      {/* Card 1 */}
      <motion.div
        style={{ scale: scale1, zIndex: 1 }}
        className="sticky top-20"
      >
        <Bookhive />
      </motion.div>

      {/* Card 2 */}
      <motion.div
        style={{ scale: scale2, zIndex: 2 }}
        className="sticky top-36"
      >
        <CurrencyPrediction />
      </motion.div>

      {/* Card 3 */}
      <motion.div
        style={{ scale: scale3, zIndex: 3 }}
        className="sticky top-52"
      >
        <BusRouting />
      </motion.div>
      
      <motion.div
        style={{ scale: scale3, zIndex: 3 }}
        className="sticky top-52"
      >
        <MobileApp />
      </motion.div>
            
    </section>
    </RevealOnScroll>
  );
};

const Bookhive = () => {
  return (
    <div className="flex flex-col gap-y-5 border border-[#e81cff lg:mx-24 mb-10 bg-[#111] rounded-4xl shadow-xl">
      <div className="p-6 flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-3xl font-bold mb-2">BookHive</h1>
          <p className="text-gray-400 max-w-lg  mb-4 leading-relaxed">
            A complete Library Management System built with ASP.NET Web Forms
            (C#)[There is PHP version also], designed to manage books, users,
            and borrowing operations efficiently. This system supports
            authentication, user management, book inventory control, and
            borrowing workflows — making it suitable for educational or
            organizational libraries.
          </p>
          <div className="mt-15 mx-8  md:mt-10 flex flex-wrap gap-2">
            {/* {["ASP.NET", "Bootstrap", "JS", "HTML"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 border text-blue-500 py-3 px-5 rounded-full text-l hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-transform duration-300"
              >
                {tech}
              </span>
            ))} */}
            <Tooltip
              techStack={
                "This project was made using C# [second version with Php] JavaScript, HTML, BootsTrap, Jquery, SQL Server..."
              }
            />
          </div>
        </div>
        <img
          src="/assets/Screenshot 2025-05-27 005328.png"
          alt=""
          className="lg:w-1/3  md:w-1/4  hidden md:block rounded-4xl w-full object-cover transition-all duration-600 ease-in-out blur-[4px] hover:blur-none hover:scale-105 hover:-rotate-[20deg]"
        />
      </div>
    </div>
  );
};
const CurrencyPrediction = () => {
  return (
    <div className="flex flex-col gap-y-5 border border-gray-400 lg:mx-24 mb-10 bg-[#111] rounded-4xl shadow-xl">
      <div className="p-6 flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-3xl font-bold mb-2">Bitcoin Price Forcasting</h1>
          <p className="text-gray-400 max-w-lg mb-4 leading-relaxed">
            Forecasting Bitcoin prices using historical data and an LSTM neural
            network. This project demonstrates how deep learning models can be
            applied to real-world financial time-series data to predict future
            trends. The model was trained on the last 2000 days of historical
            Bitcoin prices, using a many-to-many LSTM architecture to predict
            the next 25 days. Data was preprocessed with scaling and reshaping,
            and model performance was visualized using actual vs. predicted
            price plots.
          </p>
          <div className="mt-15 mx-8  flex flex-wrap gap-2">
            {/* {["ASP.NET", "Bootstrap", "JS", "HTML"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 border text-blue-500 py-3 px-5 rounded-full text-l hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-transform duration-300"
              >
                {tech}
              </span>
            ))} */}
            <Tooltip
              techStack={
                "This project was made using Python, PyTorch, Pandas, Numpy, Matplotlib, Scikit-learn"
              }
            />
          </div>
        </div>
        <img
          src="/assets/whole_plot.png"
          alt=""
          className="lg:w-1/3 md:w-1/4 hidden my-28 md:block rounded-4xl w-full object-cover transition-all duration-600 ease-in-out blur-[4px] hover:blur-none hover:scale-105 hover:-rotate-[20deg]"
        />
      </div>
    </div>
  );
};
const BusRouting = () => {
  return (
    <div className="flex flex-col gap-y-5 border border-gray-400 lg:mx-24  mb-10 bg-[#111] rounded-4xl shadow-xl">
      <div className="p-6 flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-3xl font-bold mb-2">Smart Transit</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-gray-400 max-w-lg mb-4 leading-relaxed">
              The Bus Routing System is a C++ console-based application designed
              to manage and simulate basic public transportation operations. The
              system allows users to: Add bus routes with unique identifiers,
              source, and destination points. Search for available routes
              between two locations. View all existing routes in a structured
              format. Delete or update route data as needed (optional, if
              implemented).This system aims to demonstrate how basic data
              structures (like arrays, linked lists, or structs) and control
              flow (if-else, loops, switch-case) can be applied to solve a
              real-world problem.
            </p>
            <Ccard className="absolute left-32 " />
          </div>

          <div className="mt-15 mx-8  flex flex-wrap gap-2">
            {/* {["ASP.NET", "Bootstrap", "JS", "HTML"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 border text-blue-500 py-3 px-5 rounded-full text-l hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-transform duration-300"
              >
                {tech}
              </span>
            ))} */}
            <Tooltip
              techStack={
                "This project was made using C++, OOP(Object-Oriented Programming), Standard I/O"
              }
            />
          </div>
        </div>
        <img
          src="/assets/SmartTransit.jpeg"
          alt=""
          className="lg:w-1/3 md:w-1/4 hidden md:block rounded-4xl w-full object-cover transition-all duration-600 ease-in-out blur-[4px] hover:blur-none hover:scale-105 hover:-rotate-[20deg]"
        />
      </div>
    </div>
  );
};

const MobileApp = () => {
  return (
    <div className="flex flex-col gap-y-5 border border-gray-400 lg:mx-24  mb-10 bg-[#111] rounded-4xl shadow-xl">
      <div className="p-6 flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-3xl font-bold mb-2">Quick Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-gray-400 max-w-lg mb-4 leading-relaxed">
              Developed a full-featured e-commerce mobile application for
              Android using Java and Firebase Firestore. The app supports
              essential e-commerce functionality including user authentication,
              product listing, cart management, and order placement. Users can
              sign up or log in securely, browse a catalog of products, add
              items to their cart, and complete purchases. Product and user data
              is managed in real time using Firestore, ensuring fast and dynamic
              user experiences
              <br />
              
            </p>
          </div>

          <div className="mt-15 mx-8  flex flex-wrap gap-2">
            {/* {["ASP.NET", "Bootstrap", "JS", "HTML"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 border text-blue-500 py-3 px-5 rounded-full text-l hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-transform duration-300"
              >
                {tech}
              </span>
            ))} */}
            <Tooltip
              techStack={
                "This project was made using Python, PyTorch, NumPy, Matplotlib, Pandas"
              }
            />
          </div>
        </div>
        <img
          src="/assets/Ecommerce.jpg"
          alt=""
          className="lg:w-1/3 md:w-1/4 hidden md:block rounded-4xl w-full object-cover transition-all duration-600 ease-in-out blur-[4px] hover:blur-none hover:scale-105 hover:-rotate-[20deg]"
        />
      </div>
    </div>
  );
};
