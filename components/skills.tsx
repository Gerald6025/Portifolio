"use client";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiChakraui,
  SiFramer,
  SiVite,
  SiGreensock,
  SiFigma,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiNpm,
  SiMongodb,
} from "react-icons/si";

type Skill = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string; // brand color for the icon
};

const frontend: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "SASS", icon: SiSass, color: "#CC6699" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
  { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  // Text-only badge
  { name: "shadcn/ui" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

const backend: Skill[] = [
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const devops: Skill[] = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "NPM", icon: SiNpm, color: "#CB3837" },
];

const Badge: React.FC<Skill> = ({ name, icon: Icon, color }) => (
  <span className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-4 py-3 text-base font-poppins min-h-[52px]">
    {Icon ? <Icon className="text-[22px]" style={{ color }} /> : null}
    {name}
  </span>
);

const Skills: React.FC = () => {
  return (
    <section className="bg-black/98 text-white py-20">
      <div className="max-w-6xl pl-16">
        <div className="mb-10">
          <h2 className="text-5xl sm:text-6xl font-oxanium font-semibold leading-none">
            Skills<span className="text-[#1D89BD]">.</span>
          </h2>
        </div>

        {/* Category */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-oxanium font-semibold">Frontend Development</h3>
          <div className="flex flex-wrap gap-3">
            {frontend.map((s) => (
              <Badge key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="space-y-4 mt-12">
          <h3 className="text-2xl sm:text-3xl font-oxanium font-semibold">Backend Development</h3>
          <div className="flex flex-wrap gap-3">
            {backend.map((s) => (
              <Badge key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="space-y-4 mt-12">
          <h3 className="text-2xl sm:text-3xl font-oxanium font-semibold">DevOps</h3>
          <div className="flex flex-wrap gap-3">
            {devops.map((s) => (
              <Badge key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
