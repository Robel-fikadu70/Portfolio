import Card from "../EXP";
import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  return (
    <RevealOnScroll>
      <section
        id="experience"
        className="relative min-h-fit bg-transparent text-white px-4 py-20"
      >
        <div className="flex flex-col  gap-4 mx-5 lg:mx-30 mb-10">
          <h1 className="text-3xl font-semibold mb-7">Experience</h1>
          <div className="flex flex-col md:flex-row justify-between ">
            <h1 className="text-2xl font-sans font-light my-4">
              Power Platform Developer -
              <span className="font-bold">Intern</span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-sans font-light">
                CodePoint Creatives
              </p>
              <p className="text-xl font-sans font-extralight">
                Nov 2024 - Feb 2025
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-between ">
            <h1 className="text-2xl font-sans font-light my-4">
              Frontend Web Developer <span className="font-bold">Part-Time</span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-sans font-light">Nova Computech</p>
              <p className="text-xl font-sans font-extralight">
                Mar 2025 - May 2025              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-between ">
            <h1 className="text-2xl font-sans font-light my-4">
              Full-Stack Web Developer - <span className="font-bold">Intern</span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-sans font-light">
                TBC Technologies
              </p>
              <p className="text-xl font-sans font-extralight">
                Jul 2025 - Oct2025
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-between ">
            <h1 className="text-2xl font-sans font-light my-4">
              Full-Stack Web Developer <span className="font-bold">Intern</span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-sans font-light">
                Gebeya Inc.
              </p>
              <p className="text-xl font-sans font-extralight">
                Jul 2025 - Jan 2026
              </p>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </RevealOnScroll>
  );
};
