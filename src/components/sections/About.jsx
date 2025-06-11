import { RevealOnScroll } from "../RevealOnScroll";
import ShineButton from "../ShineButton";
import Shineytxt from "../Shinetxt";
import { ShinyButton } from "../customButton";
import Roblox from "./Roblox";
export const About = () => {
  return (
    <RevealOnScroll>
    <section
      id="about"
      className="items-center my-10 justify-center flex relative"
    >
      {/* <div className="text-center">
        <p className="text-2xl text-gray-50 max-w-170 p-10 leading-relaxed">
          I'm a third-year <Shineytxt Value={"Computer Science"} /> student who loves turning ideas into
          real software. I learn best by building -- whether it's <Shineytxt Value={"Full-stack web"} /> 
          and <Shineytxt Value={"mobile apps"} />, <Shineytxt Value={"machine learning"} />  experiments, or<Shineytxt Value={"Backend"} />  systems that
          power useful tools.
        </p>
        
      </div> */}
      <Roblox/>
    </section>
    </RevealOnScroll>
  );
};
