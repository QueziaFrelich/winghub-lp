"use client";

import { useState } from "react";
import Image from "next/image";
import { features } from "../../data/featuresdata";

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section id="funcionalidades" className="w-full bg-[#5D3171] py-20">
  <div className="mx-auto max-w-7xl px-6 md:grid md:grid-cols-2 md:gap-12 flex flex-col md:flex-row">
    
    {/* Accordion */}
    <div className="flex-1">
      <h2 className="mb-8 text-2xl font-ubuntu text-white md:text-3xl">
        Principais funcionalidades
      </h2>

      <div className="space-y-4">
        {features.map((feature, index) => {
          const isActive = active === index;

          return (
            <div
              key={feature.id}
              className={`rounded-xl transition-all ${
                isActive ? "bg-[#CFEADB]" : "bg-[#6B3A7D]"
              }`}
            >
              <button
                onClick={() => setActive(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span
                  className={`font-bold ${isActive ? "text-[#260635]" : "text-white"}`}
                >
                  {feature.title}
                </span>

                <span className={`text-xl ${isActive ? "text-[#260635]" : "text-white"}`}>
                  {isActive ? "−" : "+"}
                </span>
              </button>

              {isActive && (
                <div className="px-6 pb-6 text-sm text-[#260635]">
                  <h3 className="mb-2">{feature.content.heading}</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {feature.content.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Imagem */}
    <div className="flex-1 relative mt-8 md:mt-0">
      <Image
        src={features[active].image}
        alt={features[active].title}
        fill
        className="rounded-xl object-cover h-full w-full"
      />
    </div>

  </div>
</section>

  );
}
