"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

const team = [
  {
    name: "Advocate Sheela S",
    specialization: "Criminal Law",
    gradient: "from-amber-500 to-orange-500",
    image: "/lawyers-image/advocate-sheela.jpeg",
  },
  {
    name: "Advocate Arjun Dawar",
    specialization: "Civil Litigation",
    gradient: "from-blue-500 to-cyan-500",
    image: "/lawyers-image/arjun-dawar.jpeg",
  },
  {
    name: "Advocate Jijo Thomas",
    specialization: "Corporate Law",
    gradient: "from-purple-500 to-pink-500",
    image: "/lawyers-image/jijo-thomas.jpeg",
  },
  {
    name: "Advocate Praveen Kharat",
    specialization: "Family Law",
    gradient: "from-green-500 to-emerald-500",
    image: "/lawyers-image/praveen-kharat.jpeg",
  },
  {
    name: "Advocate Sunil Sontake",
    specialization: "Tax Law",
    gradient: "from-red-500 to-rose-500",
    image: "/lawyers-image/sunil-sontake.jpeg",
  },
  {
    name: "Advocate Titus Philip",
    specialization: "Property Law",
    gradient: "from-indigo-500 to-purple-500",
    image: "/lawyers-image/titus-philip.jpeg",
  },
  {
    name: "Advocate Vaishali Sharma",
    specialization: "Labour Law",
    gradient: "from-yellow-500 to-amber-500",
    image: "/lawyers-image/vaishali-sharma.jpeg",
  },
  {
    name: "Advocate Hitesh Khatri",
    specialization: "Consumer Law",
    gradient: "from-teal-500 to-cyan-500",
    image: "/lawyers-image/user.jpeg",
  },
  {
    name: "Advocate Pankesh Bhai",
    specialization: "Banking Law",
    gradient: "from-orange-500 to-red-500",
    image: "/lawyers-image/user.jpeg",
  },
  {
    name: "Advocate Robert Bhagat",
    specialization: "IP Law",
    gradient: "from-violet-500 to-purple-500",
    image: "/lawyers-image/user.jpeg",
  },
  {
    name: "Advocate Poonam Mehta",
    specialization: "Immigration Law",
    gradient: "from-pink-500 to-rose-500",
    image: "/lawyers-image/user.jpeg",
  },
  {
    name: "Advocate Ranjeet Bhagat",
    specialization: "Constitutional Law",
    gradient: "from-cyan-500 to-blue-500",
    image: "/lawyers-image/user.jpeg",
  },
];

export default function Team() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    if (!isPaused) {
      animationRef.current = setInterval(scroll, 30);
    }

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [isPaused]);

  return (
    <section id="team" className="backdrop-blur-md py-20 min-h-screen ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Experienced attorneys with proven expertise across all legal domains
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-10 overflow-x-auto scroll-smooth items-center pb-4 hide-scrollbar min-h-[500px]"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {[...team, ...team].map((member, idx) => (
            <div
              key={idx}
              className={`shrink-0 w-75  ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(idx % team.length) * 0.08}s` }}
            >
              <Card
                className="group hover:shadow-black hover:shadow-xl py-0 border-0 transition-all bg-transparent duration-300 cursor-pointer hover:scale-105 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
              >
                <div className={`h-40 `}></div>

                <div className="p-6 bg-black/60 my-rounded-bottom">
                  <h4 className="group bg-white border-b bg-clip-text text-transparent">
                    {member.name}
                  </h4>

                  {/* <div className="pt-4 border-t border-border">
                    <Badge className="text-sm bg-black/70 font-semibold mb-4">
                      {member.specialization}
                    </Badge>
                  </div> */}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
