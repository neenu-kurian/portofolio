import Image from "next/image";
import Chip from "./Chip";
import { FiGithub } from "react-icons/fi";
import { ImNewTab } from "react-icons/im";

const CardImage = ({
  src,
  alt,
  title,
  content,
  tech,
  link,
}: {
  src: string;
  alt: string;
  title: string;
  content: string;
  tech: string[];
  link: string;
}) => {
  return (
    <div className="p-4 md:p-5 border rounded-md shadow border-gray-100">
      <div className="relative group">
        <Image src={src} alt={alt} width={500} height={500} className="rounded-2xl w-full h-auto"/>
        <div className="absolute inset-0 backdrop-blur-[1px] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2 md:gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Live Demo <ImNewTab className="text-sm" />
            </a>
            <button className="bg-white text-black px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm md:text-base">
              <FiGithub className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-lg md:text-xl font my-3 md:my-5">{title}</h3>
      <p className="text-sm md:text-base text-gray-500">{content}</p>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {tech.map((tech) => (
          <Chip key={tech} item={tech} color="bg-gray-100" textColor="text-black" />
        ))}
      </div>
    </div>
  );
};

export default CardImage;
