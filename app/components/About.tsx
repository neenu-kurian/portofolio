"use client";

import { useEffect, useRef, useState } from "react";

const About = () => {
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
    <div id="about" ref={ref} className="p-8 md:p-20">
      <h2
        className={`text-2xl md:text-3xl font-medium mb-6 ${
          visible ? "fade-in slow" : "opacity-0"
        }`}
      >
        About Me
      </h2>

      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed mb-4 ${
          visible ? "fade-in slow delay-100" : "opacity-0"
        }`}
      >
        I am a front-end developer with over six years of experience who enjoys
        giving life to designs that will genuinely make lives of users
        easier. I&apos;ve worked across fintech, e-commerce, and automotive
        domains, collaborating closely with designers, product owners, and
        engineers to deliver high-quality interfaces that balance user needs
        with business goals.
      </p>

      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed mb-4 ${
          visible ? "fade-in slow delay-400" : "opacity-0"
        }`}
      >
        I&apos;m proud to have contributed to multiple projects that helped
        customers by bringing major improvements to existing features that
        reduced drop-off rate and improved conversions. I enjoy learning from
        others, sharing knowledge, and creating an environment where working
        together is both productive and fun.
      </p>

      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed mb-4 ${
          visible ? "fade-in slow delay-600" : "opacity-0"
        }`}
      >
        Since modern front-end development revolves around JavaScript, I find it
        easy to pick up new technologies and frameworks quickly, regardless of
        stack. I consider myself a quick learner, always eager to adapt and
        grow.
      </p>

      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed mb-4 ${
          visible ? "fade-in slow delay-800" : "opacity-0"
        }`}
      >
        What I love about front-end world is that it is constantly evolving.
        I love to work in an environment that challenges me to grow as well as
        promotes learning and sharing knowledge. My ambition is to continue to
        grow as a developer and to contribute to projects that can make a real
        impact on lives of customers — simplifying existing flows or
        developing new features.
      </p>
      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed ${
          visible ? "fade-in slow delay-1000" : "opacity-0"
        }`}
      >
        The most rewarding part of my work is happiness that I see in others
        when we add value for customers and organization.
      </p>
    </div>
  );
};

export default About;
