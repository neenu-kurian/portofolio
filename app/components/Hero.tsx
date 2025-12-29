"use client";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  const router = useRouter();
  const goToAbout = () => router.push("/#about");
  const goToProjects = () => router.push("/#project");

  return (
    <div className="min-h-screen p-6 md:p-20 bg-blue-50 mb-8 bg-[radial-gradient(circle_at_center,#ffffff_0,#ffffff_180px,#f6f0fa_100%)]">
      <div className="text-lg text-gray-500">Hey there, I&apos;m Neenu</div>
      <div className="text-3xl md:text-5xl my-8 py-4 relative inline-block">
        <span className="block fade-in mb-8">A Front-End Developer</span>
        <span className="block text-gray-500 animate-move-left delay-300 mb-4">& A Problem Solver</span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-600 animate-underline opacity-0"></div>
      </div>
      <p className="text-base md:text-lg text-gray-500 max-w-xs md:max-w-200">
        With over six years of experience in bringing designs to life, I love to make interfaces that make users lives easier. Excited to build something wonderful with you!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button className="pr-4 py-3 text-lg group" onClick={goToAbout}>
          Let&apos;s get started <GoArrowRight className="inline text-[20px] group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <button
          className="px-4 py-3 bg-black text-white rounded-lg text-lg group hover:bg-gray-800"
          onClick={goToProjects}
        >
          Check out my work <GoArrowRight className="inline text-[20px] group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
