import ShinyButtonnn from "../Hovbtn";
import SocialButton from "../linkedIN";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <RevealOnScroll>
    <section
      id="home"
      className="min-h-screen bg-gray- flex flex-col gap-y-5 items-center justify-center relative"
    >
      
        <div className="relative space-y-10 items-center flex flex-col w-screen">
          <img
            src="/assets/proff.jpg"
            className=" w-40 h-40 object-cover border-4 border-gray-700 shadow-xl rounded-full bg-amber-50"
          />
          <span className=" absolute w-auto bottom-5 left-1/2 -translate-x-1/2 transform px-5 py-1   bg-gray-200 rounded-md shadow-md text-black text-center text-xl font-bold">
            Robel Fikadu
          </span>
        </div>

        <div className="text-center">
          <h1 className="text-5xl min-w-0 max-w-200 bg-clip-text bg-radial-[at_45%_50%] from-white to-zinc-900 to-100% text-transparent">
            Welcome I'm The Master Mind Behind This Portfolio{" "}
          </h1>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-400 max-w-170 p-3 ">
            A passionate Tech Enthusiast dedicated to create innovative and
            impactful solutions. With a background in computer science, I strive
            to blend creativity with functionality in every project I undertake.
            When I'm not coding, you might find me exploring the latest tech
            trends or tinkering with gadgets!
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <ShinyButtonnn />
          <SocialButton />
        </div>
      
    </section>
    </RevealOnScroll>
  );
};
