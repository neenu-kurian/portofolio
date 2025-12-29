"use client"
import { timeLine } from "../skills";
import TimeLineCard from "./TimeLineCard";
import { useEffect, useRef, useState } from "react";

const TimeLine = () => {
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
    <div id="timeline" ref={ref} className="p-5 md:p-20 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-medium mb-6">Career Journey</h2>
      <p className="text-base md:text-lg mb-20 md:mb-40">
        A timeline showcasing my growth and key milestones in front-end
        development
      </p>
      <div className="relative top-10 md:top-0">
        <div className="hidden md:block w-0.5 h-320 top-5 bg-linear-to-b from-blue-500 to-purple-500 absolute left-1/2 z-0"></div>
          {timeLine.map((eachitem, index) => {
            const isLeft = index % 2 === 0;
            const Icon = eachitem.icon;
            return (
              <div key={index} className="relative w-full h-48 md:h-64 mb-8 md:mb-14">
                <Icon className="border-4 border-gray-200 rounded-full w-12 h-12 md:w-15 md:h-15 p-2 absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 bg-white" />
                <TimeLineCard
                  key={index}
                  year={eachitem.time}
                  title={eachitem.title}
                  content={eachitem.content}
                  subtitle={eachitem.subtitle}
                  isLeft={isLeft}
                  color={eachitem.color}
                  visible={visible}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
