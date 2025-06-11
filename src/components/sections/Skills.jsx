import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  return (
    <RevealOnScroll>
    <section
      id="skills"
      className="relative min-h-fit bg-transparent text-white px-4 py-20"
    >
      <div className="flex flex-col hover:border border-[#e81cff] transition-shadow duration-400 ease-in rounded-3xl p-5 gap-y-5 mx-5 lg:mx-30 mb-10 ">
        <h1 className="text-3xl font-semibold">
          Teck-Stack I've Worked With Before{" "}
        </h1>
        <div className="mt-10  flex flex-wrap gap-4">
          {[
            "JavaScript (ES6+)",
            "Java",
            "Python",
            "C/C++",
            "ASP.NET",
            "SQL",
            "Bootstrap",
            "Tailwind CSS",
            "HTML",
            "React.js",
            "Android (Java/Kotlin)",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Firebase",
            "JWT",
            "MS-PowerPlatforms",
            "PowerApps",
            "MS-Sharepoint",
            "Power Automate",
            "PowerBI",
          ].map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 border text-white border-gray-500 py-2 px-3 rounded-lg text-l animate-pulse  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-transform duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="bg-blue-500/10 border text-gray-400 border-gray-500 py-2 px-3 rounded-lg text-l max-w-fit  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-transform duration-300">
          &#43; More
        </span>
      </div>
    </section>
    </RevealOnScroll>
  );
};
