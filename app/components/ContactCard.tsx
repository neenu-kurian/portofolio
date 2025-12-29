"use client"
import { CiMail, CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { ImNewTab } from "react-icons/im";
import { useEffect, useRef, useState } from "react";

const ContactCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="md:p-20 p-10" id="contact">
      <h3 className="text-3xl font-medium mb-6">Let&apos;s Connect</h3>
      <p className="mb-6 text-gray-500">
        I&apos;m always interested in hearing about new opportunities,
        collaborations, or just having a conversation about front-end
        development.
      </p>
      <a
        href="mailto:neenukurian92@gmail.com"
        className={`flex border-gray-200 border rounded-md p-5 mb-5 ${visible ? "animate-move-right" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiMail className="bg-gray-50 rounded-full mr-5 text-2xl mt-1" />
        <div className="flex flex-col">
          <div className="text-lg text-gray-500">Email</div>
          <div>neenukurian92@gmail.com</div>
        </div>
        <ImNewTab className="ml-auto text-2xl mt-1"/>
      </a>
      <a
        href="https://www.linkedin.com/in/neenu-kurian-01718a132/"
        className={`flex border-gray-200 border rounded-md p-5 mb-5 ${visible ? "animate-move-right delay-300" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin className="bg-gray-50 rounded-full mr-5 text-2xl mt-1" />
        <div className="flex flex-col">
          <div className="text-lg text-gray-500">LinkedIn</div>
          <div>linkedin.com/in/neenu-kurian</div>
        </div>
        <ImNewTab className="ml-auto text-2xl mt-1" />
      </a>
      <a
        href="https://github.com/neenu-kurian"
        className={`flex border-gray-200 border rounded-md p-5 ${visible ? "animate-move-right delay-600" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub className="bg-gray-50 rounded-full mr-5 text-2xl mt-1" />
        <div className="flex flex-col">
          <div className="text-lg text-gray-500">Github</div>
          <div>github.com/neenukurian</div>
        </div>
        <ImNewTab className="ml-auto text-2xl mt-1" />
      </a>
    </div>
  );
};

export default ContactCard;
