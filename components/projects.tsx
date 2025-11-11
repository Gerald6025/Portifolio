"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiFramer,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

type Tech = {
  name: string;
  icon?: IconType;
  color?: string;
};

type Project = {
  year: string;
  title: string;
  description: string;
  tech: Tech[];
  links?: {
    live?: string;
    github?: string;
    figma?: string;
  };
  image?: string;
};

const sampleProjects: Project[] = [
  {
    year: "2025",
    title: "Chinotimba Primary School",
    description:
      "Modern, responsive website for Chinotimba Primary School featuring multiple pages which gives all the wanted and needed information about the school",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
    links: {
      live: "https://chinotimba-primary-school.vercel.app/",
      github: "https://github.com/Gerald6025/Chinotimba-Primary-School",
      figma: "#",
    },
    image: "/chinos.PNG",
  },
  {
    year: "2025",
    title: "Glass Gaming",
    description:
      "A Website for a website called glass gaming which is a blog website which shares about the latest trends in the world of gaming",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
    links: {
      live: "https://glass-gaming.vercel.app/",
      github: "https://github.com/Gerald6025/glass-gaming",
      figma: "#",
    },
    image: "/gla.PNG",
  },
  {
    year: "2025",
    title: "Sole Society",
    description:
      "An eCommerce website which deals with selling of sneakers especially the famous brands such as nike, adidas,vans and Balenciaga",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
    links: {
      live: "https://sole-society.vercel.app/",
      github: "https://github.com/Gerald6025/Sole-Society",
      figma: "#",
    },
    image: "/so.PNG",
  },
];

const Pill: React.FC<Tech> = ({ name, icon: Icon, color }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0a0a0a] px-3.5 py-1.5 text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
    {Icon ? <Icon className="text-[16px]" style={{ color }} /> : null}
    {name}
  </span>
);

const Cta: React.FC<{ href?: string; children: React.ReactNode; icon?: React.ReactNode }>
  = ({ href = "#", children, icon }) => (
  <Link href={href} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 hover:bg-white/10 transition-colors px-3.5 py-2.5 text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
    {icon}
    {children}
  </Link>
);

const Projects: React.FC = () => {
  return (
    <section className="bg-black/98 text-white py-20">
      <div className="max-w-6xl mx-15">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-5xl sm:text-6xl font-oxanium font-semibold leading-none">
            Projects<span className="text-[#1D89BD]">.</span>
          </h2>
        </div>

        {/* Projects list */}
        <div className="space-y-12">
          {sampleProjects.map((p, i) => {
            const isAlt = i % 2 === 1;
            const textOrder = isAlt ? "md:order-2" : "md:order-1";
            const imageOrder = isAlt ? "md:order-1" : "md:order-2";
            const sideShift = isAlt ? "-ml-5 sm:-ml-8 translate-x-[-15%]" : "-mr-5 sm:-mr-8 translate-x-[15%]";
            const containerShift = isAlt ? "translate-x-[100px]" : "";
            return (
              <div key={`${p.title}-${i}`} className={`relative rounded-2xl border-2 border-white/20 bg-white/5 p-8 sm:p-14 ${containerShift}`}>

              {/* Tech row marquee overlapping top border */}
              <div className="absolute left-5 sm:left-8 right-5 sm:right-8 -top-8 sm:-top-14 -translate-y-[50%] overflow-hidden marquee">
                <div className="marquee-track flex items-center gap-2 whitespace-nowrap will-change-transform">
                  {Array.from({ length: 12 })
                    .flatMap(() => p.tech)
                    .map((t, idx) => (
                      <Pill key={`${t.name}-${idx}`} {...t} />
                    ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center pt-8 sm:pt-12">
                {/* Left content */}
                <div className={`flex flex-col justify-between ${textOrder}`}>
                  <div className="space-y-5">
                    <span className="inline-flex text-[12px] text-white/80 bg-black/40 border border-white/15 rounded-full px-3 py-1">{p.year}</span>
                    <h3 className="text-4xl sm:text-5xl font-oxanium font-semibold">{p.title}</h3>
                    <p className="text-white/80 font-poppins leading-7 max-w-xl">{p.description}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Cta href={p.links?.live} icon={<FiExternalLink className="text-[#1D89BD]" />}>Live demo</Cta>
                    <Cta href={p.links?.github} icon={<FaGithub />}>GitHub</Cta>
                    <Cta href={p.links?.figma} icon={<SiFigma className="text-[#F24E1E]" />}>Figma</Cta>
                  </div>
                </div>

                {/* Right image */}
                <div className={`relative rounded-xl border-2 border-white/20 bg-black/40/60 min-h-[364px] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05)] -mt-5 sm:-mt-8 mb-2 sm:mb-4 self-center transform w-[115%] max-w-none ${imageOrder} ${sideShift} ${isAlt ? "relative right-11" : ""}`}>
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  ) : null}
                </div>
              </div>
            </div>
            );
          })}
        </div>
        {/* Scoped marquee styles */}
        <style jsx>{`
          .marquee { position: relative; }
          .marquee-track { animation: marquee 19.6s linear infinite; }
          .marquee:hover .marquee-track { animation-play-state: paused; }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;
