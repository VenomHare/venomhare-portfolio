"use client";

import React from "react";

interface HeroRevealProps {
  text: string;
}

export default function HeroReveal({ text }: HeroRevealProps) {
  const chars = Array.from(text);
  
  return (
    <h1 className="hero-title">
      {chars.map((char, index) => {
        if (char === " ") {
          return (
            <span key={index} className="inline-block" style={{ width: "0.25em" }}>
              &nbsp;
            </span>
          );
        }
        return (
          <span
            key={index}
            className="char-reveal"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
}
