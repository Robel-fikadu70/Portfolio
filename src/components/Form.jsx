import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_yfj2k1s";
  const TEMPLATE_ID = "template_frvdxs8";
  const PUBLIC_KEY = "hB7lbYfIH1VJk5O6e";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({ email: "", message: "" });
      })
      .catch(() => alert("Ooops! Something went wrong. Please try again."));
  };

  return (
    <div className="w-full px-4">
      <div className="relative w-full max-w-3xl mx-auto rounded-2xl p-[2px] animate-gradient-border overflow-hidden z-0">
        {/* Outer border animation layer */}
        <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_35%,#e81cff,#40c9ff)] z-0 animate-gradient" />

        {/* Inner content box with padding box and dark bg */}
        <div className="relative z-10 bg-[#212121] rounded-[14px] p-8 text-white">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-gray-300"
              >
                Business Email
              </label>
              <input
                required
                name="email"
                id="email"
                value={formData.email}
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#414141] text-white placeholder-opacity-50 focus:outline-none focus:border-[#e81cff]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="textarea"
                className="text-xs font-semibold text-gray-300"
              >
                How Can I Help You?
              </label>
              <textarea
                required
                cols={50}
                rows={10}
                id="textarea"
                value={formData.message}
                name="message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                defaultValue={"          "}
                className="w-full px-4 py-3 h-24 resize-none rounded-lg bg-transparent border border-[#414141] text-white placeholder-opacity-50 focus:outline-none focus:border-[#e81cff]"
              />
            </div>

            <button
              type="submit"
              className="w-2/5 mt-2 px-4 py-3 text-sm font-semibold text-gray-400 bg-[#313131] border border-[#414141] rounded-md hover:bg-white hover:text-black hover:border-white active:scale-95 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* CSS for animated border */}
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient-border {
            background: linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff);
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
            border-radius: 16px;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Form;
