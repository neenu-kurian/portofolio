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
        giving life to designs that will genuinely make lives of users easier.
        I&apos;ve worked across fintech, e-commerce, and automotive domains,
        collaborating closely with designers, product owners, and engineers to
        deliver high-quality interfaces that balance user needs with business
        goals.
      </p>
      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed mb-4 ${
          visible ? "fade-in slow delay-400" : "opacity-0"
        }`}
      >
        I&apos;m proud to have contributed to multiple projects that helped
        customers by bringing major improvements to existing features that
        reduced drop-off rate and improved conversions. Over the years,
        I&apos;ve learned that while &quot;clean code&quot; is important, code
        that&apos;s easy for the next developer to understand and maintain is
        even better. That&apos;s why I always take the time to tidy up,
        refactor, and leave things in a better state than I found them. I enjoy
        learning from others, sharing knowledge, and creating an environment
        where working together is both productive and fun.
      </p>
      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed mb-4 ${
          visible ? "fade-in slow delay-600" : "opacity-0"
        }`}
      >
        Since modern front-end is so JavaScript-heavy, I&apos;ve found that once
        you understand the core language, picking up a new framework or stack is
        just a matter of learning the syntax. I&apos;ve proven this on past
        projects where I&apos;ve had to jump into unfamiliar tech and get up to
        speed quickly. The constant shift in front-end tech is what keeps me
        motivated - there&apos;s always a better way to solve a problem or a new
        puzzle to figure out. The most rewarding part of my work is seeing the
        happiness it brings to the users and the organization.
      </p>
      <p
        className={`text-base md:text-lg text-gray-500 leading-relaxed mb-4 ${
          visible ? "fade-in slow delay-800" : "opacity-0"
        }`}
      >
        Outside of work, my little ones make sure I never forget the true
        meaning of &quot;multitasking&quot;. If I earn a moment to myself,
        you&apos;ll find me with family and friends, enjoying music, watching
        movies (in installments), or attempting gardening (mostly trying to keep
        plants alive). I&apos;m also trying to learn Dutch and having small,
        mini-conversations as I go.
      </p>
    </div>
  );
};

export default About;
